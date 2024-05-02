import { useState } from "react"
import styles from "./Dropdown.module.css"

const Dropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  const options = [
    "TextTextText",
    "TextTextText",
    "TextTextText",
    "TextTextText",
  ]

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelectOption = (value) => {
    setSelectedOption(value)
    onSelect(value)
    setIsOpen(false)
  }

  return (
    <section className={styles.theme}>
      <div className={styles.select} onClick={toggleDropdown}>
        <button className={styles.placeholder} name="dropdown">
          {selectedOption || "Placeholder"}{" "}
        </button>
        {isOpen && (
          <ul className={styles.optionList}>
            {options.map((option, index) => (
              <li
                key={index}
                className={styles.option}
                onClick={() => handleSelectOption(option)}
              >
                <button className={styles.eachOption} type="button">
                  {option}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Dropdown
