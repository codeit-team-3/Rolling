import { useState } from "react"
import styles from "./Option.module.css"

const Option = ({ optionType, onSelectOption }) => {
  const backGroundImageUrls = [
    "https://picsum.photos/id/683/3840/2160",
    "https://picsum.photos/id/24/3840/2160",
    "https://picsum.photos/id/599/3840/2160",
    "https://picsum.photos/id/1058/3840/2160",
  ]

  const [selectedOption, setSelectedOption] = useState(
    optionType === "color" ? "beige" : "image1",
  )

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    if (optionType === "color") {
      onSelectOption(option)
    } else {
      const index = parseInt(option.slice(-1)) - 1
      onSelectOption(backGroundImageUrls[index])
    }
  }

  if (optionType === "color") {
    return (
      <div className={styles["option-container"]}>
        <button
          className={`${styles["option-button"]} ${styles["beige"]}`}
          onClick={() => handleOptionClick("beige")}
        >
          {selectedOption === "beige" && (
            <div className={styles["selected-icon"]}>
              <i className="ic-check"></i>
            </div>
          )}
        </button>
        <button
          className={`${styles["option-button"]} ${styles["purple"]}`}
          onClick={() => handleOptionClick("purple")}
        >
          {selectedOption === "purple" && (
            <div className={styles["selected-icon"]}>
              <i className="ic-check"></i>
            </div>
          )}
        </button>
        <button
          className={`${styles["option-button"]} ${styles["blue"]}`}
          onClick={() => handleOptionClick("blue")}
        >
          {selectedOption === "blue" && (
            <div className={styles["selected-icon"]}>
              <i className="ic-check"></i>
            </div>
          )}
        </button>
        <button
          className={`${styles["option-button"]} ${styles["green"]}`}
          onClick={() => handleOptionClick("green")}
        >
          {selectedOption === "green" && (
            <div className={styles["selected-icon"]}>
              <i className="ic-check"></i>
            </div>
          )}
        </button>
      </div>
    )
  } else {
    return (
      <div className={styles["option-container"]}>
        <button
          className={`${styles["option-button"]} ${styles["image1"]} ${selectedOption === "image1" ? styles["selected"] : ""}`}
          onClick={() => handleOptionClick("image1")}
        >
          {selectedOption === "image1" && (
            <div className={styles["selected-icon"]}>
              <i className="ic-check"></i>
            </div>
          )}
        </button>
        <button
          className={`${styles["option-button"]} ${styles["image2"]} ${selectedOption === "image2" ? styles["selected"] : ""}`}
          onClick={() => handleOptionClick("image2")}
        >
          {selectedOption === "image2" && (
            <div className={styles["selected-icon"]}>
              <i className="ic-check"></i>
            </div>
          )}
        </button>
        <button
          className={`${styles["option-button"]} ${styles["image3"]} ${selectedOption === "image3" ? styles["selected"] : ""}`}
          onClick={() => handleOptionClick("image3")}
        >
          {selectedOption === "image3" && (
            <div className={styles["selected-icon"]}>
              <i className="ic-check"></i>
            </div>
          )}
        </button>
        <button
          className={`${styles["option-button"]} ${styles["image4"]} ${selectedOption === "image4" ? styles["selected"] : ""}`}
          onClick={() => handleOptionClick("image4")}
        >
          {selectedOption === "image4" && (
            <div className={styles["selected-icon"]}>
              <i className="ic-check"></i>
            </div>
          )}
        </button>
      </div>
    )
  }
}

export default Option
