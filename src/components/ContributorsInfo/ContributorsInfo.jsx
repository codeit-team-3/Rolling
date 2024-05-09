import React from "react"
import ProfileImage from "../ProfileImage/ProfileImage"
import styles from "./ContributorsInfo.module.css"

const ContributorsInfo = ({ recentMessages, messageCount }) => {
  return (
    <>
      <div className={styles.profileImgBox}>
        {recentMessages.map(({ id, profileImageURL }) => (
          <ProfileImage key={id} src={profileImageURL} />
        ))}
        {messageCount > 3 && (
          <div className={styles.otherContributor}>+{messageCount - 3}</div>
        )}
      </div>
      <div className={styles.contributors}>
        <span>{messageCount}</span>
        <p>명이 작성했어요!</p>
      </div>
    </>
  )
}

export default ContributorsInfo
