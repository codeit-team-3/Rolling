import React, { useState, useEffect } from "react"
import Button from "./Button"
import BadgeEmoji from "./BadgeEmoji"
import ContributorsInfo from "./ContributorsInfo"
import Toast from "./Toast"
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
  const [showToast, setShowToast] = useState(false)
  const { width } = useWindowSize()

  useEffect(() => {
    width >= 768 ? setScreenSize("medium") : setScreenSize("small")
  }, [width])

  const { name, recentMessages, messageCount, reactionCount, topReactions } =
    recipient

  const handleClickMoreEmojis = () => {
    setMoreEmoji((preState) => !preState)
  }

  const handleClickDropdown = () => {
    setShowDropdown((preState) => !preState)
  }

  const handleClickURL = () => {
    onCopyAddress()
    setShowDropdown(false)
    setShowToast(true)
  }

  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <h2>To.{name}</h2>
        <div className={styles.contents}>
          {screenSize === "medium" && (
            <div className={styles.contributorsInfo}>
              <ContributorsInfo
                recentMessages={recentMessages}
                messageCount={messageCount}
              />
              <div className={styles.line} />
            </div>
          )}

          <div className={styles.emojiSection}>
            {reactionCount > 0 && (
              <div className={styles.topEmoji}>
                {topReactions.map(({ emoji, count }) => (
                  <BadgeEmoji key={emoji} emoji={emoji} count={count} />
                ))}
                <button onClick={handleClickMoreEmojis}>
                  <i className="ic-arrow_down"></i>
                </button>
              </div>
            )}
            <Button.Outlined size="36" icon="add">
              {screenSize === "medium" ? "추가" : null}
            </Button.Outlined>
          </div>

          <div className={styles.line} />

          <div className={styles.shareSection}>
            <Button.Outlined icon="share" onClick={handleClickDropdown} />
            {showDropdown && (
              <div className={styles.dropdownList}>
                <button>카카오톡 공유</button>
                <button onClick={handleClickURL}>URL 공유</button>
              </div>
            )}
            {showToast && (
              <Toast
                message="URL이 복사되었습니다."
                onClose={() => setShowToast(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceHeader
