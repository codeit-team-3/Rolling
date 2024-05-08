import React, { useEffect, useState } from "react"
import EmojiPicker from "emoji-picker-react"
import BadgeEmoji from "../BadgeEmoji"
import Button from "../Button"
import ArrowButton from "../ArrowButton"
import {
  createRecipientReaction,
  getRecipientReaction,
} from "../../services/apiRecipients"
import styles from "./EmojiSection.module.css"

const LIMIT = 8

const EmojiSection = ({ id, screenSize }) => {
  const [topReactions, setTopReactions] = useState([])
  const [moreEmoji, setMoreEmoji] = useState(false)
  const [showChoiceEmoji, setShowChoiceEmoji] = useState(false)
  const [reactions, setReactions] = useState([])
  const [reactionsOffset, setReactionsOffset] = useState(0)

  useEffect(() => {
    fetchData(0)
  }, [])

  useEffect(() => {
    fetchData(reactionsOffset)
  }, [reactionsOffset])

  const fetchData = async (offset) => {
    const res = await getRecipientReaction(id, LIMIT, offset)
    const result = res.results
    setReactions(result)

    if (offset === 0) {
      setTopReactions(result.length > 3 ? result.slice(0, 3) : result)
    }
  }

  const handleClickMoreEmojisButton = () => {
    setMoreEmoji((preState) => !preState)
  }

  const handleClickAddEmojisButton = () => {
    setShowChoiceEmoji((preState) => !preState)
  }

  const handleClickEmoji = async (e) => {
    await createReaction(e.emoji)
    await fetchData(reactionsOffset)
    setShowChoiceEmoji(false)
  }

  const handleClickMoreEmoji = async (emoji) => {
    await createReaction(emoji)
    await fetchData(reactionsOffset)
    setMoreEmoji(false)
  }

  const createReaction = async (emoji) => {
    const emojiData = {
      emoji: emoji,
      type: "increase",
    }

    await createRecipientReaction(id, emojiData)
  }

  return (
    <div className={styles.emojiSection}>
      {reactions && (
        <div className={styles.topEmoji}>
          {topReactions.map(({ emoji, count }) => (
            <button key={emoji} onClick={() => createReaction(emoji)}>
              <BadgeEmoji emoji={emoji} count={count} />
            </button>
          ))}
          <button onClick={handleClickMoreEmojisButton}>
            <i className="ic-arrow_down"></i>
          </button>
          {moreEmoji && (
            <div className={styles.moreEmojisWrapper}>
              <div className={styles.moreEmojis}>
                {reactions.map(({ emoji, count }) => (
                  <button
                    key={emoji}
                    onClick={() => handleClickMoreEmoji(emoji)}
                  >
                    <BadgeEmoji emoji={emoji} count={count} />
                  </button>
                ))}
              </div>
              <div className={styles.navigation}>
                {reactionsOffset > 0 && (
                  <ArrowButton
                    direction="left"
                    onClick={() => setReactionsOffset((prev) => prev - 8)}
                  />
                )}
                {reactions.length >= 8 && (
                  <ArrowButton
                    direction="right"
                    onClick={() => setReactionsOffset((prev) => prev + 8)}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      )}

      <div className={styles.addEmoji}>
        <Button.Outlined
          size="36"
          icon="add"
          onClick={handleClickAddEmojisButton}
        >
          {screenSize === "medium" ? "추가" : null}
        </Button.Outlined>
        {showChoiceEmoji && (
          <EmojiPicker
            onEmojiClick={handleClickEmoji}
            lazyLoadEmojis={true}
            className={styles.emojiPicker}
          />
        )}
      </div>
    </div>
  )
}

export default EmojiSection
