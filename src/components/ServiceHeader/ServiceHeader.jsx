import React, { useState, useEffect, useRef } from "react"
import clsx from "clsx"
import Button from "../Button/Button"
import ContributorsInfo from "../ContributorsInfo/ContributorsInfo"
import ReactionSection from "./ReactionSection"
import Toast from "../Toast/Toast"
import useWindowSize from "../../hooks/useWindowSize"
import styles from "./ServiceHeader.module.css"
const { Kakao } = window

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
  const [showDropdown, setShowDropdown] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const dropdownRef = useRef()
  const { width } = useWindowSize()

  useEffect(() => {
    width >= 768 ? setScreenSize("medium") : setScreenSize("small")
  }, [width])

  const { id, name, recentMessages, messageCount, topReactions } = recipient

  const handleClickDropdown = () => {
    setShowDropdown((preState) => !preState)
  }

  const handleClickUrlShare = () => {
    onCopyAddress()
    setShowDropdown(false)
    setShowToast(true)
  }

  useEffect(() => {
    const handleOutsideClose = (e) => {
      if (showDropdown && !dropdownRef.current.contains(e.target))
        setShowDropdown(false)
    }

    document.addEventListener("click", handleOutsideClose)

    return () => document.removeEventListener("click", handleOutsideClose)
  }, [showDropdown])

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast((prevState) => !prevState)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [showToast])

  // 카카오

  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init(import.meta.env.VITE_KAKAO_SHARE_JS_KEY)
    }
  }, [])

  const kakaoShare = async () => {
    try {
      Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: `${name}에게 메세지를 남겨주세요!`,
          description: "지금 바로 Rolling에서 친구들과 속마음을 나눠보세요!",
          imageUrl: "https://ifh.cc/g/FJpk58.jpg",
          link: {
            mobileWebUrl: `${import.meta.env.VITE_URL}/post/${id}`,
            webUrl: `${import.meta.env.VITE_URL}/post/${id}`,
          },
        },
        buttons: [
          {
            title: "이동 하기",
            link: {
              mobileWebUrl: `${import.meta.env.VITE_URL}/post/${id}`,
              webUrl: `${import.meta.env.VITE_URL}/post/${id}`,
            },
          },
        ],
        installTalk: true,
      })
    } catch (error) {
      console.dir(error)
    }
  }

  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <h2>To.{name}</h2>
        <div className={styles.contents}>
          {screenSize === "medium" && (
            <>
              <div
                className={clsx(styles.contributorsInfo, {
                  [styles.onlyOneContributor]: messageCount === 1,
                })}
              >
                {/* <div className={styles.contributorsInfo}> */}
                <ContributorsInfo
                  recentMessages={recentMessages}
                  messageCount={messageCount}
                />
              </div>
              <div className={styles.line} />
            </>
          )}

          <div className={styles.emojiSection}>
            <ReactionSection
              id={id}
              screenSize={screenSize}
              topReactions={topReactions}
            />
          </div>

          <div className={styles.line} />

          <div className={styles.shareSection} ref={dropdownRef}>
            <Button.Outlined
              icon="share"
              size="36"
              onClick={handleClickDropdown}
            />
            {showDropdown && (
              <div className={styles.dropdownList}>
                <button onClick={kakaoShare}>카카오톡 공유</button>
                <button onClick={handleClickUrlShare}>URL 공유</button>
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
