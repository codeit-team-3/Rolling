import { useNavigate } from "react-router-dom"
import ContributorsInfo from "../ContributorsInfo/ContributorsInfo"
import BadgeEmoji from "../BadgeEmoji/BadgeEmoji"
import styles from "./CardList.module.css"
import beigeImage from "../../assets/img-beige.png"
import greenImage from "../../assets/img-green.png"
import purpleImage from "../../assets/img-purple.png"
import blueImage from "../../assets/img-blue.png"

const BACKGROUND_COLOR_IMAGE = {
  beige: beigeImage,
  green: greenImage,
  purple: purpleImage,
  blue: blueImage,
}

const CardList = ({
  id,
  backgroundColor,
  backgroundImageURL,
  name,
  recentMessages,
  messageCount,
  topReactions,
}) => {
  const BACKGROUND = {
    beige: { backgroundColor: "#ffe2ad" },
    green: { backgroundColor: "#d0f5c3" },
    purple: { backgroundColor: "#ecd9ff" },
    blue: { backgroundColor: "#b1e4ff" },
    image: {
      color: "var(--white)",
    },
  }

  const nav = useNavigate()

  const onClickHandler = () => {
    nav(`/post/${id}`)
  }

  return (
    <div
      className={styles.cardList}
      style={
        backgroundImageURL ? BACKGROUND.image : BACKGROUND[backgroundColor]
      }
      onClick={onClickHandler}
    >
      {backgroundImageURL ? (
        <>
          <div className={styles.overlay}></div>
          <img
            className={styles.backgroundImage}
            src={backgroundImageURL}
          ></img>
        </>
      ) : (
        <img
          className={styles.colorImage}
          src={BACKGROUND_COLOR_IMAGE[backgroundColor]}
          alt="배경이미지"
        ></img>
      )}

      <section className={styles.content}>
        <div className={styles.name}>{`To. ${name}`}</div>
        <ContributorsInfo
          recentMessages={recentMessages}
          messageCount={messageCount}
        />
      </section>

      <section className={styles.reactions}>
        {topReactions.map((item) => {
          return (
            <BadgeEmoji key={item.id} count={item.count} emoji={item.emoji} />
          )
        })}
      </section>
    </div>
  )
}

export default CardList
