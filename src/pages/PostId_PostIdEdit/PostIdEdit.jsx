import React, { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  deleteRecipient,
  getRecipient,
  getRecipientMessages,
} from "../../services/apiRecipients"
import ServiceHeader from "../../components/ServiceHeader/ServiceHeader"
import Card from "../../components/Card"
import styles from "./PostId.module.css"
import { deleteMessage } from "../../services/apiMessage"
import ButtonPrimary from "../../components/ButtonPrimary"

const PostIdEdit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [recipient, setRecipient] = useState(null)
  const [messages, setMessages] = useState([])
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [nextPageUrl, setNextPageUrl] = useState("")
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const recipientData = await getRecipient(id)
        setRecipient(recipientData)
        const messageData = await getRecipientMessages(id)
        setMessages(messageData.results)
        setNextPageUrl(messageData.next)
      } catch (error) {
        console.error("Error fetching data:", error)
        setError(error)
      }
    }

    fetchInitialData()
  }, [id])

  const fetchMessages = async () => {
    console.log("fetchMessages 함수")
    if (!nextPageUrl || loading) return
    setLoading(true)
    try {
      const response = await fetch(nextPageUrl)
      const data = await response.json()
      setMessages((prevMessages) => [...prevMessages, ...data.results])
      setNextPageUrl(data.next)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching more messages:", error)
      setError(error)
      setLoading(false)
    }
  }

  const handleScroll = useCallback(() => {
    const scrollPosition =
      window.innerHeight + document.documentElement.scrollTop
    const threshold = document.documentElement.offsetHeight - 100 // 페이지 끝에서 100px 정도 남았을 때 호출

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
    try {
      await deleteMessage(messageId)
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.id !== messageId),
      )
    } catch (error) {
      console.error("Error deleting message:", error)
      setError(error)
    }
    setLoading(false)
  }

  const handleDeletePage = async (recipientId) => {
    setLoading(true)
    try {
      //진짜 삭제할건지 물어보는 창 만들지말지 고민......
      await deleteRecipient(recipientId)
      navigate("/list")
    } catch (error) {
      console.error("recipient를 삭제하는 동안 오류가 발생했습니다:", error)
      setError(error)
    }
    setLoading(false)
  }

  if (error) return <div>Error: {error}</div>
  if (!recipient) return <div>Loading...</div> //<-이거 스타일 수정해야함 @!!!

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
        <div className={styles["button-container"]}>
          <ButtonPrimary
            className={styles["delete-page-button"]}
            onClick={() => handleDeletePage(recipient.id)}
            size="40"
          >
            삭제하기
          </ButtonPrimary>
        </div>
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
    </div>
  )
}

export default PostIdEdit
