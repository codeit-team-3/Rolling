import styles from "./Input.module.css"
import { useState } from "react"

const Input = () => {
  const [text, setText] = useState("")

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <label htmlFor="userInput"></label>
      <input
        className={styles["input"]}
        id="userInput"
        value={text}
        onChange={onChange}
        placeholder="Placeholder"
      />
    </div>
  )
}

export default Input
