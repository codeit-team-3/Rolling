import { useState } from 'react';
import Badge from './Badge';
import ButtonPrimary from './ButtonPrimary';
import styles from './Modal.module.css';

function Modal({ messageData }) {
  if (!messageData) {
    return (
      <div className={`${styles.modal} ${styles.loading}`}>Loading...</div>
    );
  }

  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  const { profileImageURL, sender, relationship, createdAt, content, font } = messageData;

  function formatDateString(dateString) {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${year}.${month}.${day}`
  }
  const formattedcreatedAt = formatDateString(createdAt);
  
  const handleClose = () => setIsVisible(false);

  return (
    <div className={styles.modal}>
      <div className={styles['message-info-container']}>
        <div className={styles['sender-info-container1']}>
          <img
            src={profileImageURL}
            alt={`Profile image of ${sender}`}
            className={styles['profile-image']}
          />
          <div className={styles['sender-info-container2']}>
            <span className={styles.sender}>
              From. <span>{sender}</span>
            </span>
            <Badge className={styles.relationship} selectedBadge={relationship}/>
          </div>
        </div>
        <span className={styles['created-at']}>{formattedcreatedAt}</span>
      </div>
      <div className={styles['message-container']}>
        <div className={styles['message-content']}>{content}</div>
      </div>
      <ButtonPrimary onClick={handleClose} children="확인" type="button" size="40" />
    </div>
  )
}

export default Modal