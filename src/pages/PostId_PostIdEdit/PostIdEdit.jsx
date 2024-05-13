import React, { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ServiceHeader from "../../components/ServiceHeader/ServiceHeader"
import Card from "../../components/Card/Card"
import useRequest from "../../hooks/useRequest"
import styles from "./PostId.module.css"
import ConfirmationDialog from "../../components/ConfirmationDialog/ConfirmationDialog"
import ButtonSecondary from "../../components/Button/ButtonSecondary"

const PostIdEdit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [recipient, setRecipient] = useState(null)
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [nextPageUrl, setNextPageUrl] = useState("")
  const [error, setError] = useState(null)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)

  const request = useRequest()

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true)
      const recipientResult = await request({ url: `/recipients/${id}/` })
      const messagesResult = await request({
        url: `/recipients/${id}/messages/`,
      })

      if (recipientResult.error) setError(recipientResult.error)
      else setRecipient(recipientResult.data)

      if (messagesResult.error) setError(messagesResult.error)
      else {
        setMessages(messagesResult.data.results)
        setNextPageUrl(messagesResult.data.next)
      }
      setLoading(false)
    }

    fetchInitialData()
  }, [id, request])

  const fetchMessages = async () => {
    if (!nextPageUrl || loading) return
    setLoading(true)

    const { data, error } = await request({ url: nextPageUrl })

    if (error) {
      setError(error)
      setLoading(false)
    } else {
      setMessages((prevMessages) => [...prevMessages, ...data.results])
      setNextPageUrl(data.next)
      setLoading(false)
    }
  }

  const handleScroll = useCallback(() => {
    const scrollPosition =
      window.innerHeight + document.documentElement.scrollTop
    const threshold = document.documentElement.offsetHeight - 100

    if (scrollPosition < threshold || loading) {
      return
    }
    fetchMessages()
  }, [loading, nextPageUrl])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const handleDeleteMessage = async (messageId) => {
    setLoading(true)
    const result = await request({
      url: `/messages/${messageId}/`,
      method: "delete",
    })
    if (result.error) {
      console.error("Error deleting message:", result.error)
      setError(result.error)
    } else {
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.id !== messageId),
      )
    }
    setLoading(false)
  }

  const handleDeletePage = async () => {
    setShowConfirmDialog(true)
  }

  const confirmDelete = async () => {
    setLoading(true)
    const result = await request({
      url: `/recipients/${id}/`,
      method: "delete",
    })
    if (result.error) {
      console.error("Error deleting recipient:", result.error)
      setError(result.error)
    } else {
      navigate("/list")
    }
    setLoading(false)
  }

  const cancelDelete = () => {
    setShowConfirmDialog(false)
  }

  const handleGoBack = () => {
    navigate(`/post/${id}`)
  }

  if (error) return <div>Error: {error}</div>
  if (!recipient) return <div>Loading...</div>

  return (
    <div
      className={`${styles["post-id-page"]} ${styles[recipient.backgroundColor || ""]} ${recipient.backgroundImageURL ? "with-background" : ""}`}
      style={
        recipient.backgroundImageURL
          ? { backgroundImage: `url(${recipient.backgroundImageURL})` }
          : {}
      }
    >
      <ServiceHeader recipient={recipient} />
      <div className={styles["card-list-container"]}>
        <div className={styles["back-button-container"]}>
          <ButtonSecondary onClick={handleGoBack} size="40">
            돌아가기
          </ButtonSecondary>
        </div>
        <button
          className={styles["delete-page-button"]}
          onClick={() => handleDeletePage(recipient.id)}
        >
          페이지 삭제
        </button>
        <ul className={styles["card-list"]}>
          {messages.map((message) => (
            <li key={message.id}>
              <Card
                messageData={message}
                isEditable={true}
                onDeleteButton={() => handleDeleteMessage(message.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      {loading && <div>Loading more...</div>}
      {showConfirmDialog && (
        <ConfirmationDialog
          isOpen={showConfirmDialog}
          onClose={cancelDelete}
          onConfirm={confirmDelete}
          message="진짜 삭제하시겠습니까?"
        />
      )}
    </div>
  )
}

export default PostIdEdit
