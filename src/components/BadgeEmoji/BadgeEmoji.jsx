import React from "react"
import styles from "./BadgeEmoji.module.css"

const BadgeEmoji = ({ emoji, count }) => {
  return (
    <span className={styles.badgeEmoji}>
      {emoji} {count}
    </span>
  )
}

export default BadgeEmoji
