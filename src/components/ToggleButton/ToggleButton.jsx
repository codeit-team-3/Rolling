import React from "react"
import clsx from "clsx"
import styles from "./ToggleButton.module.css"

const ToggleButton = ({ onClick, text, isSelected }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.toggleButton, {
        [styles[`selected-button`]]: isSelected,
      })}
    >
      {text}
    </button>
  )
}

export default ToggleButton
