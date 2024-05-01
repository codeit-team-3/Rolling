import styles from "./Input.module.css"
import { useState } from "react"

const Input = () => {
  const [text, setText] = useState("")
  const [isTouched, setIsTouched] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onBlur = () => {
    setIsTouched(true)
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const hasError = isTouched && !isFocused && text.trim() === ""
  return (
    <div>
      <input
        className={hasError ? styles.errorInput : styles.input}
        value={text}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder="Placeholder"
      />
      {hasError && <p className={styles.errorMessage}>Error Message</p>}
    </div>
  )
}

export default Input