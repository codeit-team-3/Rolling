import { useState } from "react"
import Badge from "../Badge/Badge"
import ButtonPrimary from "../Button/ButtonPrimary"
import ProfileImage from "../ProfileImage/ProfileImage"
import { formatDateString } from "../../utils/formatDateString"
import { stripHtml } from "../../utils/stripHtml"
import styles from "./Modal.module.css"

const fontStyles = {
  Pretendard: { fontFamily: "Pretendard" },
  나눔명조: { fontFamily: "나눔명조" },
  // "Gaegu": { fontFamily: "Gaegu" },
  // "신디나루": { fontFamily: "신디나루" }
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

  // const handleClose = () => setIsVisible(false)

  // 이벤트 전파를 막는 핸들러
  const handleModalClick = (event) => {
    event.stopPropagation(); // 모달 내부 클릭시 이벤트 전파 중지
  };

  const handleClose = () => {
    setIsVisible(false);
    onClose(); // 부모 컴포넌트의 닫기 처리 함수 호출
  };

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
        <div
          className={styles["message-content"]}
          style={fontStyles[messageData.font]}
        >
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
