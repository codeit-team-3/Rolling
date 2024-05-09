import React, { useCallback, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import clsx from "clsx"
import Input from "../../components/Input/Input"
import TextEditor from "../../components/TextEditor/TextEditor"
import Dropdown from "../../components/Dropdown/Dropdown"
import Button from "../../components/Button/Button"
import ProfileInput from "./ProfileInput"
import useRequest from "../../hooks/useRequest"
import styles from "./PostIDMessage.module.css"

const MESSAGE_INITIAL_MODEL = {
  recipientId: "",
  sender: "",
  profileImageURL: "",
  relationship: "지인",
  content: "",
  font: "Noto Sans",
}

const RELATIONSHIP_OPTIONS = ["지인", "동료", "가족", "친구"]

const FONT_OPTIONS = [
  "Noto Sans",
  "Pretendard",
  "나눔명조",
  "나눔손글씨 손편지",
]

const PostMessage = () => {
  const [messageData, setMessageData] = useState(MESSAGE_INITIAL_MODEL)
  const [isFormValid, setIsFormValid] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const request = useRequest()

  const recipientId = pathname.split("/")[2]

  const createRecipientMessage = async () => {
    const { error } = request({
      url: `/recipients/${recipientId}/messages/`,
      method: "POST",
      data: messageData,
    })

    if (error) console.log("메세지를 생성하는데 실패했습니다", error)
  }

  const handleChangeData = useCallback((key, value) => {
    setMessageData((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }, [])

  const handleSendMessageAndNavigate = (e) => {
    e.preventDefault()
    createRecipientMessage(recipientId, messageData)
    navigate(`/post/${recipientId}`)
  }

  // recipientID 변경시 data의 recipientID를 변경해주는 useEffect
  useEffect(() => {
    handleChangeData("recipientId", recipientId)
  }, [handleChangeData, recipientId])

  useEffect(() => {
    const isValid = Object.values(messageData).every((value) => !!value)
    setIsFormValid(isValid)
  }, [messageData])

  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="sender">From.</label>
        <Input
          id="sender"
          placeholder="이름을 입력해주세요."
          onBlurProp={(e) => {
            const value = e.target.value
            handleChangeData("sender", value)
          }}
          errorMessage="값을 입력해주세요."
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="profileImageURL">프로필 이미지</label>
        <ProfileInput
          onChange={(value) => {
            handleChangeData("profileImageURL", value)
          }}
        />
      </div>
      <div className={clsx(styles.formGroup, styles.dropdown)}>
        <label htmlFor="relationship">상대와의 관계</label>
        <Dropdown
          options={RELATIONSHIP_OPTIONS}
          onSelect={(value) => {
            handleChangeData("relationship", value)
          }}
          placeholder="지인"
        />
      </div>
      <div className={clsx(styles.formGroup, styles.textEditor)}>
        <label htmlFor="content">내용을 입력해주세요</label>
        <TextEditor
          onBlur={(value) => {
            handleChangeData("content", value)
          }}
        />
      </div>
      <div className={clsx(styles.formGroup, styles.dropdown)}>
        <label htmlFor="font">폰트 선택</label>
        <Dropdown
          options={FONT_OPTIONS}
          onSelect={(value) => {
            handleChangeData("font", value)
          }}
          placeholder="Noto Sans"
        />
      </div>
      <Button.Primary
        size={56}
        type="submit"
        onClick={(e) => handleSendMessageAndNavigate(e)}
        disabled={!isFormValid}
      >
        생성하기
      </Button.Primary>
    </form>
  )
}

export default PostMessage
