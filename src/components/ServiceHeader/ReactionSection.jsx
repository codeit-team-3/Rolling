import React, { useCallback, useEffect, useRef, useState } from "react"
import EmojiPicker from "emoji-picker-react"
import BadgeEmoji from "../BadgeEmoji"
import Button from "../Button"
import ArrowButton from "../ArrowButton"
import useRequest from "../../hooks/useRequest"
import styles from "./ReactionSection.module.css"

const REACTIONS_LIMIT = 8

const EmojiSection = ({ id, screenSize }) => {
  const emojisRef = useRef(null)
  const emojiPickerRef = useRef(null)
  const [reactions, setReactions] = useState({})
  const [topReactions, setTopReactions] = useState([])
  const [showAllEmojis, setShowAllEmojis] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [offset, setOffset] = useState(0)
  const request = useRequest()

  // 데이터 관련 함수
  const getReactions = useCallback(async () => {
    const { data, error } = await request({
      url: `recipients/${id}/reactions/`,
      method: "get",
      params: { limit: REACTIONS_LIMIT, offset: offset },
    })

    if (data) setReactions(data)
    else if (error) alert("오류로 리액션을 불러오는데에 실패하였습니다.")
  }, [id, offset, request])

  const getTopReactions = useCallback(async () => {
    const { data } = await request({
      url: `recipients/${id}/reactions/`,
      method: "get",
    })

    if (data) setTopReactions(data.results.slice(0, 3))
  }, [id, request])

  const createReaction = async (emoji) => {
    const { error } = await request({
      url: `recipients/${id}/reactions/`,
      method: "post",
      data: { emoji: emoji, type: "increase" },
    })

    if (error) {
      alert("서버 오류로 이모지 등록에 실패하였습니다.")
    } else {
      await getTopReactions()
      await getReactions()
    }
  }

  // 창 show 상태 토글함수
  const toggleShowAllEmojis = () => {
    setShowEmojiPicker(false)
    setShowAllEmojis((preState) => !preState)
  }

  const toggleShowEmojiPicker = () => {
    setShowAllEmojis(false)
    setShowEmojiPicker((preState) => !preState)
  }

  // emoji-picker에서 이모지 클릭
  const handleClickEmojiPicker = async (e) => {
    const emoji = e.emoji
    await createReaction(emoji)
    setShowEmojiPicker(false)
  }

  // 이모지뱃지 클릭
  const handleClickAllEmojis = async (emoji) => {
    await createReaction(emoji)
    setShowAllEmojis(false)
  }

  // useEffect
  useEffect(() => {
    getReactions()
  }, [getReactions])

  useEffect(() => {
    getTopReactions()
  }, [getTopReactions])

  useEffect(() => {
    const handleOutsideClose = (e) => {
      if (showAllEmojis && !emojisRef.current.contains(e.target))
        setShowAllEmojis(false)
      else if (showEmojiPicker && !emojiPickerRef.current.contains(e.target))
        setShowEmojiPicker(false)
    }

    document.addEventListener("click", handleOutsideClose)

    return () => document.removeEventListener("click", handleOutsideClose)
  }, [showAllEmojis, showEmojiPicker])

  return (
    <div className={styles.emojiSection}>
      {reactions && (
        <div className={styles.topEmoji} ref={emojisRef}>
          {topReactions.map(({ emoji, count }) => (
            <button key={emoji} onClick={() => createReaction(emoji)}>
              <BadgeEmoji emoji={emoji} count={count} />
            </button>
          ))}

          <button onClick={toggleShowAllEmojis}>
            <i className="ic-arrow_down"></i>
          </button>

          {showAllEmojis && (
            <div className={styles.allEmojisWrapper}>
              <div className={styles.allEmojis}>
                {reactions.results.map(({ emoji, count }) => (
                  <button
                    key={emoji}
                    onClick={() => handleClickAllEmojis(emoji)}
                  >
                    <BadgeEmoji emoji={emoji} count={count} />
                  </button>
                ))}
              </div>

              <div className={styles.navigation}>
                {reactions.previous && (
                  <ArrowButton
                    direction="left"
                    onClick={() => setOffset((prev) => prev - REACTIONS_LIMIT)}
                  />
                )}
                {reactions.next && (
                  <ArrowButton
                    direction="right"
                    onClick={() => setOffset((prev) => prev + REACTIONS_LIMIT)}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      )}

      <div className={styles.addEmoji} ref={emojiPickerRef}>
        <Button.Outlined size="36" icon="add" onClick={toggleShowEmojiPicker}>
          {screenSize === "medium" ? "추가" : null}
        </Button.Outlined>

        {showEmojiPicker && (
          <EmojiPicker
            onEmojiClick={handleClickEmojiPicker}
            lazyLoadEmojis={true}
            className={styles.emojiPicker}
          />
        )}
      </div>
    </div>
  )
}

export default EmojiSection
