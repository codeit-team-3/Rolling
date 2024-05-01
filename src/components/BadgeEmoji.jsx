import React from "react"
import PropTypes from "prop-types"
import styles from "./BadgeEmoji.module.css"

const BadgeEmoji = ({ emoji, number }) => {
  return (
    <span className={styles.badgeEmoji}>
      {emoji} {number}
    </span>
  )
}

BadgeEmoji.propTypes = {
  emoji: PropTypes.string,
  number: PropTypes.number,
}

export default BadgeEmoji
