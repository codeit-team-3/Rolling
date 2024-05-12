import React, { useState } from "react"
import Input from "../Input/Input"
import styles from "./PostInput.module.css"

const PostInput = ({ onRecipientSelect }) => {
  const [error, setError] = useState(false)
  const [recipientName, setRecipientName] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleInput = (e) => {
    const value = e.target.value
    setRecipientName(value)
    onRecipientSelect(value)

    if (value.trim() === "") {
      setError(true)
    } else {
      setError(false)
    }
  }

  const handleBlur = () => {
    setIsFocused(false)
    if (recipientName.trim() === "") {
      setError(true)
    }
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  return (
    <div className={styles[`input-container`]}>
      <Input
        placeholder="받는 사람 이름을 입력해 주세요"
        value={recipientName}
        onChange={handleInput}
        onBlur={handleBlur}
        onFocus={handleFocus}
        errorMessage={
          error || (!isFocused && recipientName.trim() === "")
            ? "값을 입력해 주세요."
            : ""
        }
      />
    </div>
  )
}

export default PostInput
