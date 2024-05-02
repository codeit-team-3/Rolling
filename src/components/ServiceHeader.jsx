import React, { useState, useEffect } from "react"
import ButtonOutlined from "./ButtonOutlined"
import BadgeEmoji from "./BadgeEmoji"
import ContributorsInfo from "./ContributorsInfo"
import useWindowSize from "../hooks/useWindowSize"
import arrowDown from "../assets/ic-arrow_down.svg"
import styles from "./RollingPaperHeader.module.css"

const RollingPaperHeader = ({ recipient }) => {
  const [screenSize, setScreenSize] = useState("medium")
  const [moreEmoji, setMoreEmoji] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const { width } = useWindowSize()

  useEffect(() => {
    width >= 768 ? setScreenSize("medium") : setScreenSize("small")
  }, [width])

  const { name, recentMessages, messageCount, topReactions } = recipient
  console.log(recipient)

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
          <div className={styles.emojiPopover}>
            {topReactions.map(({ emoji, count }) => (
              <BadgeEmoji key={emoji} emoji={emoji} count={count} />
            ))}
            <button onClick={clickMoreEmojis}>
              <img src={arrowDown} alt="이모지 반응 더 보기" />
            </button>
          </div>
          {/* {moreEmoji && (
            <div className={styles.emojiBox}>
              <BadgeEmoji emoji={"😀"} count="23" />
              <BadgeEmoji emoji={"🥰"} count="10" />
              <BadgeEmoji emoji={"🤩"} count="2" />
              <BadgeEmoji emoji={"😀"} count="23" />
              <BadgeEmoji emoji={"🥰"} count="10" />
               <BadgeEmoji emoji={"🥰"} count="10" />
              <BadgeEmoji emoji={"🤩"} count="2" />
              <BadgeEmoji emoji={"😀"} count="23" />
            </div>
          )} */}
          <div className={styles.buttons}>
            <ButtonOutlined size="36" icon="add">
              {screenSize === "medium" ? "추가" : null}
            </ButtonOutlined>
            <div className={styles.line} />
            <ButtonOutlined icon="share" onClick={clickDropdown} />
            {showDropdown && (
              <div className={styles.dropdownList}>
                <div>카카오톡 공유</div>
                <div>URL 공유</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default RollingPaperHeader
