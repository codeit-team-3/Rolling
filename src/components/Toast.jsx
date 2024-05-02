import React from "react"
import "./Toast.css"
import completed from "../assets/completed.png"
import close from "../assets/close.png"

const Toast = ({ message, onClose }) => {
  const handleClose = () => {
    onClose()
  }

  return (
    <div className="toast">
      <img src={completed} alt="completed" className="toast-icon" />
      <div className="toast-content">{message}</div>
      <img
        src={close}
        alt="close"
        className="toast-icon"
        onClick={handleClose}
      />
    </div>
  )
}

export default Toast
