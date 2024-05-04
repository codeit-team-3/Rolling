import React from "react"
import styles from "./ProfileImage.module.css"

const ProfileImage = ({ id, src }) => {
  return (
    <div className={styles.profileImg}>
      <img src={src} alt={id ? `${id}의 프로필 이미지` : "프로필 이미지"} />
    </div>
  )
}

export default ProfileImage
