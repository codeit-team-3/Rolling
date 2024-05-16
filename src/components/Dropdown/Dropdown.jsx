import { useState } from "react"
import styles from "./Dropdown.module.css"
import clsx from "clsx"

const Dropdown = ({ options = [], placeholder = "Placeholder", onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  const toggleDropdown = (e) => {
    e.preventDefault()
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
        <button
          className={clsx(styles.placeholder, { [styles.focus]: isOpen })}
          name="dropdown"
        >
          {selectedOption || placeholder}
          <i className="ic-arrow_down"></i>
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
