import React from "react"
import styles from "./ButtonCircleAdd.module.css"

const Button = ({ onClick, disabled = false }) => {
  return (
    <button
      className={styles["btn-circle-add"]}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <i className="ic-plus"></i>
    </button>
  )
}

export default Button
