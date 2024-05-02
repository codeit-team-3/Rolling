import styles from "./Dropdown.module.css"
import { useState } from "react"

const Dropdown = () => {
  const [select, setSelect] = useState("")

  const IconSVG = styles.svg

  const onClick = (e) => {
    setSelect(e.target.value)
  }

  return (
    <select onClick={onClick} className={styles.select} name="dropdown">
      <option disabled hidden selected>
        Placeholder
      </option>
      <option>TextTextText</option>
      <option>TextTextText</option>
      <option>TextTextText</option>
      <option>TextTextText</option>
    </select>
  )
}

export default Dropdown
