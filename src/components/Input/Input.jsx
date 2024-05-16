import React, { useState } from "react"
import styles from "./Input.module.css"

const Input = ({
  placeholder,
  onChange,
  onBlurProp,
  onFocusProp,
  errorMessage,
}) => {
  const [text, setText] = useState("")
  const [isTouched, setIsTouched] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (e) => {
    setText(e.target.value)
    if (onChange) onChange(e)
  }

  const handleBlur = (e) => {
    setIsTouched(true)
    setIsFocused(false)
    if (onBlurProp) onBlurProp(e)
  }

  const handleFocus = (e) => {
    setIsFocused(true)
    if (onFocusProp) onFocusProp(e)
  }

  const hasError = isTouched && !isFocused && text.trim() === ""

  return (
    <div>
      <input
        className={hasError ? styles.errorInput : styles.input}
        value={text}
        name="input"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder={placeholder}
      />
      {hasError && <p className={styles.errorMessage}>{errorMessage || ""}</p>}
    </div>
  )
}

export default Input
