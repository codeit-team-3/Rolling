import React from "react"
import "./Toast.css"

const Toast = ({ message, onClose }) => {
  const handleClose = () => {
    onClose()
  }

  return (
    <div className={styles[`toast`]}>
      <i className="ic-completed" />
      <div className={styles[`toast-content`]}>{message}</div>
      <i className="ic-close" onClick={handleClose} />
    </div>
  )
}

export default Toast
