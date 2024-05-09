import React, { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getRecipient, getRecipientMessages } from "../../services/apiRecipients"
import ServiceHeader from "../../components/ServiceHeader/ServiceHeader"
import Card from "../../components/Card"
import CardAdd from "../../components/CardAdd"
import Modal from "../../components/Modal"
import ButtonPrimary from "../../components/ButtonPrimary"
import styles from "./PostId.module.css"

const PostId = () => {
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

  const handleCardClick = (message) => setSelectedMessage(message)
  const handleCardAddClick = () => navigate(`/post/${id}/message`)
  const handleCloseModal = () => setSelectedMessage(null)
  const handleNavigateToEdit = () => navigate(`/post/${id}/edit`)

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
      <ServiceHeader className={styles["servie-header"]} recipient={recipient} />
      <div className={styles["card-list-container"]}>
        <div className={styles["button-container"]}>
          <ButtonPrimary onClick={handleNavigateToEdit} size="40">
            페이지 관리
          </ButtonPrimary>
        </div>
        <ul className={styles["card-list"]}>
          <li>
            <CardAdd onClickAddCardButton={handleCardAddClick} />
          </li>
          {messages.map((message) => (
            <li key={message.id}>
              <Card
                messageData={message}
                isEditable={false}
                onClickCard={() => handleCardClick(message)}
              />
            </li>
          ))}
        </ul>
      </div>
      {selectedMessage && (
        <div className={styles["modal-container"]} onClick={handleCloseModal}>
          <div className={styles["modal-content"]}>
            <Modal messageData={selectedMessage} onClose={handleCloseModal} />
          </div>
        </div>
      )}
      {loading && <div>Loading more...</div>}
    </div>
  )
}

export default PostId
