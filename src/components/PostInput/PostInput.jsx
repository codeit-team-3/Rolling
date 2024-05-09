import React, { useState } from "react"
import styles from "./PostInput.module.css"

const PostInput = ({ onRecipientSelect }) => {
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [recipientName, setRecipientName] = useState("")

  const handleInput = (event) => {
    const inputValue = event.target.value.trim()
    setRecipientName(inputValue)
    onRecipientSelect(inputValue)
    if (inputValue === "") {
      setError(true)
      setErrorMessage("값을 입력해 주세요.")
    } else {
      setError(false)
      setErrorMessage("")
    }
  }

  const handleBlur = () => {
    if (recipientName === "") {
      setError(true)
      setErrorMessage("값을 입력해 주세요.")
    }
  }

  return (
    <div className={styles[`input-container`]}>
      <input
        type="text"
        placeholder="받는 사람 이름을 입력해 주세요"
        value={recipientName}
        onChange={handleInput}
        onBlur={handleBlur}
      />
      {error && <p className={styles[`input-error`]}>{errorMessage}</p>}
      <div></div>
    </div>
  )
}

export default PostInput
