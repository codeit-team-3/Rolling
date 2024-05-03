import React, { useState, useEffect } from "react"
import ButtonOutlined from "./ButtonOutlined"
import BadgeEmoji from "./BadgeEmoji"
import ContributorsInfo from "./ContributorsInfo"
import useWindowSize from "../hooks/useWindowSize"
import styles from "./ServiceHeader.module.css"

const onCopyAddress = async () => {
  const currentURL = window.location.href
  try {
    await navigator.clipboard.writeText(currentURL)
  } catch (e) {
    alert("복사에 실패하였습니다")
  }
}

const ServiceHeader = ({ recipient }) => {
  const [screenSize, setScreenSize] = useState("medium")
  const [moreEmoji, setMoreEmoji] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const { width } = useWindowSize()

  useEffect(() => {
    width >= 768 ? setScreenSize("medium") : setScreenSize("small")
  }, [width])

  const { name, recentMessages, messageCount, reactionCount, topReactions } =
    recipient

  const clickMoreEmojis = () => {
    setMoreEmoji((preState) => !preState)
  }

  const clickDropdown = () => {
    setShowDropdown((preState) => !preState)
  }

  return (
    <>
      <div className={styles.header}>
        <h2>To.{name}</h2>
        <div className={styles.section}>
          {screenSize === "medium" && (
            <div className={styles.contributorsInfo}>
              <ContributorsInfo
                recentMessages={recentMessages}
                messageCount={messageCount}
              />
              <div className={styles.line} />
            </div>
          )}
          {reactionCount > 0 && (
            <div className={styles.emojiPopover}>
              {topReactions.map(({ emoji, count }) => (
                <BadgeEmoji key={emoji} emoji={emoji} count={count} />
              ))}
              <button onClick={clickMoreEmojis}>
                <i className="ic-arrow_down"></i>
              </button>
            </div>
          )}
          <div className={styles.buttons}>
            <ButtonOutlined size="36" icon="add">
              {screenSize === "medium" ? "추가" : null}
            </ButtonOutlined>
            <div className={styles.line} />
            <ButtonOutlined icon="share" onClick={clickDropdown} />
            {showDropdown && (
              <div className={styles.dropdownList}>
                <button>카카오톡 공유</button>
                <button onClick={onCopyAddress}>URL 공유</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceHeader
