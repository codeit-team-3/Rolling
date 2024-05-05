import React, { useCallback, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import clsx from "clsx"
import Input from "../../components/Input"
import ProfileInput from "./ProfileInput"
import TextEditor from "../../components/TextEditor"
import Dropdown from "../../components/Dropdown/Dropdown"
import Button from "../../components/Button"
import { createRecipientMessage } from "../../services/apiRecipients"
import styles from "./PostMessage.module.css"

const initialModel = {
  team: "6-3",
  recipientId: 0,
  sender: "",
  profileImageURL: "",
  relationship: "지인",
  content: "",
  font: "Noto Sans",
}

const RELATIONSHIP_OPTIONS = ["지인", "동료", "가족", "친구"]

const FONT_OPTIONS = ["Noto Sans", "Pretendard"]

const PostMessage = () => {
  const [state, setState] = useState(initialModel)
  const [isFormValid, setIsFormValid] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const recipientId = pathname.split("/")[2]

  const handleChangeValue = useCallback((key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }, [])

  const handleBlurNameValue = (value) => {
    handleChangeValue("sender", value)
  }

  const handleChangeImage = (value) => {
    handleChangeValue("profileImageURL", value)
  }

  const handleChangeRelationship = (value) => {
    handleChangeValue("relationship", value)
  }

  const handleChangeContent = (value) => {
    handleChangeValue("content", value)
  }

  const handleChangeFont = (value) => {
    handleChangeValue("font", value)
  }

  const handleClickSubmit = (e) => {
    e.preventDefault()
    createRecipientMessage(recipientId, state)
    navigate(`/post/${recipientId}`)
  }

  useEffect(() => {
    handleChangeValue("recipientId", recipientId)
  }, [handleChangeValue, recipientId])

  useEffect(() => {
    const isValid = Object.values(state).every((value) => !!value)
    setIsFormValid(isValid)
  }, [state])

  return (
    <div>
      <form className={styles.wrapper}>
        <div className={styles.formGroup}>
          <label htmlFor="sender">From.</label>
          <Input
            id="sender"
            placeholder="이름을 입력해주세요."
            onBlurProp={handleBlurNameValue}
            errorMessage="값을 입력해주세요."
          />
        </div>
        <div className={styles.formGroup}>
          <label>프로필 이미지</label>
          <ProfileInput onChange={handleChangeImage} />
        </div>
        <div className={clsx(styles.formGroup, styles.dropdown)}>
          <label htmlFor="">상대와의 관계</label>
          <Dropdown
            options={RELATIONSHIP_OPTIONS}
            onSelect={handleChangeRelationship}
            placeholder="지인"
          />
        </div>
        <div className={clsx(styles.formGroup, styles.textEditor)}>
          <label htmlFor="">내용을 입력해주세요</label>
          <TextEditor onBlur={handleChangeContent} />
        </div>
        <div className={clsx(styles.formGroup, styles.dropdown)}>
          <label htmlFor="">폰트 선택</label>
          <Dropdown
            options={FONT_OPTIONS}
            onSelect={handleChangeFont}
            placeholder="Noto Sans"
          />
        </div>
        <Button.Primary
          size={56}
          type="submit"
          onClick={(e) => handleClickSubmit(e)}
          disabled={!isFormValid}
        >
          생성하기
        </Button.Primary>
      </form>
    </div>
  )
}

export default PostMessage
