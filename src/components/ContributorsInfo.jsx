import React from "react"
import ProfileImage from "./ProfileImage"
import styles from "./ContributorsInfo.module.css"

const ContributorsInfo = ({ recentMessages, messageCount }) => {
  const totalContributors = recentMessages.length
  const showContributors =
    totalContributors > 3 ? recentMessages.slice(3) : recentMessages

  return (
    <>
      <div className={styles.profileImgBox}>
        {showContributors.map(({ id, profileImageURL }) => (
          <ProfileImage key={id} src={profileImageURL} />
        ))}
        {totalContributors > 3 && <div>+{totalContributors - 3}</div>}
      </div>
      <div className={styles.contributors}>
        <span>{messageCount}</span>
        <p>명이 작성했어요!</p>
      </div>
    </>
  )
}

export default ContributorsInfo
