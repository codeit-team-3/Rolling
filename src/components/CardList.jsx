import styles from "./CardList.module.css"
import ContributorsInfo from "./ContributorsInfo"
import BadgeEmoji from "./BadgeEmoji"

const CardList = ({
  backgroundColor,
  backgroundImageURL,
  name,
  recentMessages,
  messageCount,
  topReactions,
}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.cardList} ${styles[backgroundColor]}`}>
        <section className={styles.name}>{`To. ${name}`}</section>
        <section className={styles.contributors}>
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
    </div>
  )
}

export default CardList
