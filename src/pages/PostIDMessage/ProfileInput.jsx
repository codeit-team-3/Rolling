import React, { useState } from "react"
import ProfileImage from "../../components/ProfileImage/ProfileImage"
import ButtonCircleAdd from "../../components/Button/ButtonCircleAdd"
import styles from "./ProfileInput.module.css"
import profileImage01 from "../../assets/img-profile01.jpeg"
import profileImage02 from "../../assets/img-profile02.jpeg"
import profileImage03 from "../../assets/img-profile03.jpeg"
import profileImage04 from "../../assets/img-profile04.jpeg"
import profileImage05 from "../../assets/img-profile05.jpeg"
import profileImage06 from "../../assets/img-profile06.jpeg"
import profileImage07 from "../../assets/img-profile07.jpeg"
import profileImage08 from "../../assets/img-profile08.jpeg"
import profileImage09 from "../../assets/img-profile09.jpeg"

const PROFILE_IMAGES = [
  profileImage01,
  profileImage02,
  profileImage03,
  profileImage04,
  profileImage05,
  profileImage06,
  profileImage07,
  profileImage08,
  profileImage09,
]

const ProfileInput = ({ onChange }) => {
  const [imagePreview, setImagePreview] = useState("")

  const handleImageUpload = (e) => {
    const targetFiles = e.target.files
    const files = Array.from(targetFiles)

    files.map((file) => {
      const reader = new FileReader()
      reader.onload = () => {
        onChange(reader.result)
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    })
  }
  const handleClickImage = (e) => {
    e.preventDefault()
    onChange(e.target.src)
    setImagePreview(e.target.src)
  }

  return (
    <div className={styles.profileImageGroup}>
      <label htmlFor="profile" name="profile" className={styles.profileLabel}>
        {imagePreview ? (
          <img src={imagePreview} alt="프로필이미지" />
        ) : (
          <i className="ic-person"></i>
        )}
        <ButtonCircleAdd />
      </label>
      <input
        type="file"
        id="profile"
        name="profile"
        accept="image/*"
        onChange={handleImageUpload}
      />
      <div className={styles.profileSelectSection}>
        <p>프로필 이미지를 선택해주세요!</p>
        <div>
          {PROFILE_IMAGES.map((img) => (
            <button key={img} onClick={handleClickImage}>
              <ProfileImage src={img} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileInput
