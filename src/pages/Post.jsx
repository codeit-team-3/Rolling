import React, { useState } from "react"
import ToggleButton from "../components/ToggleButton"
import Option from "../components/Option"
import styles from "./Post.module.css"
import PostInput from "../components/PostInput/PostInput"
import { createPost } from "../apis/api"
import { Link } from "react-router-dom"

const Post = () => {
  const [selectedButton, setSelectedButton] = useState("color")
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedRecipient, setSelectedRecipient] = useState("")
  const [userName, setUserName] = useState(false)

  const handleButtonClick = (button) => {
    setSelectedButton(button)
    setUserName(false)
  }

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
  }

  const handleRecipientSelect = (recipientName) => {
    setSelectedRecipient(recipientName)
    setUserName(recipientName !== "")
  }

  const handleOptionClick = async () => {
    try {
      let postData = {
        name: selectedRecipient,
        backgroundColor: selectedButton === "color" ? selectedOption : "beige",
        backgroundImageURL: selectedButton === "image" ? selectedOption : null,
      }
      const response = await createPost(postData)
      console.log("포스트 생성 성공:", response)
    } catch (error) {
      console.error("포스트 생성에 실패:", error)
    }
  }

  return (
    <div>
      <div className={styles[`post-header`]}></div>
      <div className={styles[`post-main`]}>
        <div className={styles[`explanation-to`]}>To.</div>
        <PostInput onRecipientSelect={handleRecipientSelect} />
        <div className={styles[`explanation-screen`]}>
          배경화면을 선택해 주세요.
        </div>
        <div className={styles[`explanation-little`]}>
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </div>
        <div className={styles[`select-buttons`]}>
          <ToggleButton
            onClick={() => handleButtonClick("color")}
            text="컬러"
            isSelected={selectedButton === "color"}
          />
          <ToggleButton
            onClick={() => handleButtonClick("image")}
            text="이미지"
            isSelected={selectedButton === "image"}
          />
        </div>
        <div className={styles[`option-container`]}>
          <Option
            optionType={selectedButton}
            onSelectOption={handleOptionSelect}
          />
        </div>
        <Link to="/PostId">
          <button
            className={styles[`post-create`]}
            onClick={handleOptionClick}
            disabled={!userName}
          >
            생성하기
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Post
