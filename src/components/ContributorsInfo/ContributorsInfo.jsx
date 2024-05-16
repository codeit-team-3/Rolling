import React from "react"

import ProfileImage from "../ProfileImage/ProfileImage"
import styles from "./ContributorsInfo.module.css"

const ContributorsInfo = ({ recentMessages, messageCount }) => {
  const MAX_DISPLAYED_CONTRIBUTORS = 3

  return (
    <>
      <div className={styles.profileImgBox}>
        {recentMessages.map(({ id, profileImageURL }) => (
          <ProfileImage key={id} src={profileImageURL} />
        ))}
        {messageCount > MAX_DISPLAYED_CONTRIBUTORS && (
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
