import { useState } from "react"
import Badge from "../Badge/Badge"
import ButtonPrimary from "../Button/ButtonPrimary"
import ProfileImage from "../ProfileImage/ProfileImage"
import { formatDateString } from "../../utils/formatDateString"
import { stripHtml } from "../../utils/stripHtml"
import styles from "./Modal.module.css"

const fontStyles = {
  "Noto Sans": "fontStyle__NotoSans",
  Pretendard: "fontStyle__Pretendard",
  나눔명조: "fontStyle__NanumMyungjo",
  "나눔손글씨 손편지체": "fontStyle__NanumPen",
}

const Modal = ({ messageData, onClose }) => {
  const [isVisible, setIsVisible] = useState(true)

  if (!messageData) {
    return <div className={`${styles.modal} ${styles.loading}`}>Loading...</div>
  }

  if (!isVisible) {
    return null
  }

  const { profileImageURL, sender, relationship, createdAt, content, font } =
    messageData
  const formattedcreatedAt = formatDateString(createdAt)
  const plainContent = stripHtml(content)

  const handleModalClick = (event) => {
    event.stopPropagation()
  }

  const handleClose = () => {
    setIsVisible(false)
    onClose()
  }

  return (
    <div className={styles.modal} onClick={handleModalClick}>
      <div className={styles["message-info-container"]}>
        <div className={styles["sender-info-container1"]}>
          <ProfileImage id={sender} src={profileImageURL} />
          <div className={styles["sender-info-container2"]}>
            <span className={styles.sender}>
              From. <span>{sender}</span>
            </span>
            <Badge
              className={styles.relationship}
              selectedBadge={relationship}
            />
          </div>
        </div>
        <span className={styles["created-at"]}>{formattedcreatedAt}</span>
      </div>
      <div className={styles["message-container"]}>
        <div className={`${styles["message-content"]} ${fontStyles[font]}`}>
          {plainContent}
        </div>
      </div>
      <div className={styles["button-container"]}>
        <ButtonPrimary onClick={handleClose} type="button" size="40">
          확인
        </ButtonPrimary>
      </div>
    </div>
  )
}

export default Modal
