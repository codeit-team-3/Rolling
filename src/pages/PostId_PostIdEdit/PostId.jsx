import React, { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ServiceHeader from "../../components/ServiceHeader/ServiceHeader"
import Card from "../../components/Card"
import CardAdd from "../../components/CardAdd"
import Modal from "../../components/Modal"
import ButtonPrimary from "../../components/ButtonPrimary"
import styles from "./PostId.module.css"
import useRequest from "../../hooks/useRequest"

const PostId = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [recipient, setRecipient] = useState(null)
  const [messages, setMessages] = useState([])
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [nextPageUrl, setNextPageUrl] = useState("")
  const [error, setError] = useState(null)
  
  const request = useRequest();

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      const recipientResult = await request({ url: `/recipients/${id}/` });
      const messagesResult = await request({ url: `/recipients/${id}/messages/` });
      
      if (recipientResult.error) setError(recipientResult.error);
      else setRecipient(recipientResult.data);

      if (messagesResult.error) setError(messagesResult.error);
      else {
        setMessages(messagesResult.data.results);
        setNextPageUrl(messagesResult.data.next);
      }
      setLoading(false);
    };

    fetchInitialData();
  }, [id, request]);

  const fetchMessages = async () => {
    if (!nextPageUrl || loading) return;
    setLoading(true);
    const messagesResult = await request({ url: nextPageUrl });
    if (messagesResult.error) {
      setError(messagesResult.error);
      setLoading(false);
    } else {
      setMessages((prevMessages) => [...prevMessages, ...messagesResult.data.results]);
      setNextPageUrl(messagesResult.data.next);
      setLoading(false);
    }
  };

  const handleScroll = useCallback(() => {
    const scrollPosition =
      window.innerHeight + document.documentElement.scrollTop
    const threshold = document.documentElement.offsetHeight - 100 

    if (scrollPosition < threshold || loading) {
      return
    }
    fetchMessages()
  }, [loading, nextPageUrl, fetchMessages])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const handleCardClick = (message) => setSelectedMessage(message)
  const handleCardAddClick = () => navigate(`/post/${id}/message`)
  const handleCloseModal = () => setSelectedMessage(null)
  const handleNavigateToEdit = () => navigate(`/post/${id}/edit`)

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
      <ServiceHeader
        className={styles["servie-header"]}
        recipient={recipient}
      />
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
