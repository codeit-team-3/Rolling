import styles from "./Badge.module.css"

const Badge = ({ selectedBadge }) => {
  return (
    <div>
      <ul className={styles.BadgeContainer}>
        {selectedBadge === "지인" && (
          <li className={styles.acquaintance}>지인</li>
        )}
        {selectedBadge === "동료" && <li className={styles.colleague}>동료</li>}
        {selectedBadge === "가족" && <li className={styles.family}>가족</li>}
        {selectedBadge === "친구" && <li className={styles.friend}>친구</li>}
      </ul>
    </div>
  )
}

export default Badge
