import React from "react"
import styles from "./ToggleButton.module.css"

const ToggleButton = ({ onClick, text, isSelected }) => {
  return (
    <button
      onClick={onClick}
      className={isSelected ? styles[`selected-button`] : ""}
    >
      {text}
    </button>
  )
}

export default ToggleButton
