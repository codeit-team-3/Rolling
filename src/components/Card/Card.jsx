import Badge from "../Badge/Badge"
import ProfileImage from "../ProfileImage/ProfileImage"
import ButtonOutlined from "../Button/ButtonOutlined"
import { formatDateString } from "../../utils/formatDateString"
import { stripHtml } from "../../utils/stripHtml"
import styles from "./Card.module.css"

const fontStyles = {
  "Pretendard": { fontFamily: "Pretendard" },
  "나눔명조": { fontFamily: "나눔명조" },
  // "Gaegu": { fontFamily: "Gaegu" },
  // "신디나루": { fontFamily: "신디나루" }
};

const Card = ({ messageData, isEditable, onDeleteButton, onClickCard }) => {
  if (!messageData) {
    return <div className={`${styles.card} ${styles.loading}`}>Loading...</div>
  }

  const handleDeleteButtonClick = () => {
    onDeleteButton(id)
  }

  const handleCardClick = () => {
    if (!isEditable) {
      onClickCard(id)
    }
  }

  const {
    id,
    profileImageURL,
    sender,
    relationship,
    createdAt,
    content,
    font,
  } = messageData

  const formattedcreatedAt = formatDateString(createdAt)
  const plainContent = stripHtml(content)

  return (
    <div
      className={styles.card}
      onClick={handleCardClick}
      style={{ cursor: isEditable ? "auto" : "pointer" }}
    >
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
        {isEditable && (
          <ButtonOutlined
            type="button"
            icon="delete"
            onClick={handleDeleteButtonClick}
          />
        )}
      </div>
      <div className={styles["message-container"]}>
        <div className={styles["message-content"]} style={fontStyles[messageData.font]}>{plainContent}</div>
      </div>
      <span className={styles["created-at"]}>{formattedcreatedAt}</span>
    </div>
  )
}

export default Card
