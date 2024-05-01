import React from "react"
import PropTypes from "prop-types"
import styles from "./BadgeEmoji.module.css"

const BadgeEmoji = ({ emoji, count }) => {
  return (
    <span className={styles.badgeEmoji}>
      {emoji} {count}
    </span>
  )
}

BadgeEmoji.propTypes = {
  emoji: PropTypes.string,
  number: PropTypes.number,
}

export default BadgeEmoji
