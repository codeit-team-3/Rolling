import styles from "./CardList.module.css"
import ContributorsInfo from "./ContributorsInfo"
import BadgeEmoji from "./BadgeEmoji"
import blue from '../assets/blue.png'
import green from '../assets/green.png'
import purple from '../assets/purple.png'
import yellow from '../assets/yellow.png'

const mockData = {
  "id": 805,
  "name": "여러분",
  "backgroundColor": "beige",
  "backgroundImageURL": "https://ifh.cc/g/loHbF4.jpg",
  "createdAt": "2023-11-18T05:11:06.874456Z",
  "messageCount": 1,
  "recentMessages": [
  {
  "id": 2568,
  "recipientId": 805,
  "sender": "하이",
  "profileImageURL": "https://fastly.picsum.photos/id/494/100/100.jpg?hmac=VY3bkvgk7NyiVsjLJ0_OBS_e_LWCFTrPEvndz6syOFQ",
  "relationship": "지인",
  "content": "<p>안녕하세요 추운데 화이팅하세요</p>",
  "font": "Noto Sans",
  "createdAt": "2023-11-18T05:11:21.822632Z"
  }
  ],
  "reactionCount": 8,
  "topReactions": [
  {
  "id": 1017,
  "emoji": "🦊",
  "count": 3
  },
  {
  "id": 1014,
  "emoji": "😄",
  "count": 1
  },
  {
  "id": 1016,
  "emoji": "🥰",
  "count": 1
  }
  ]
}

const CardList = ({ color }) => {

  const data = mockData.topReactions

  return (
    <div className={`${styles.container} ${styles[color]}`}>
      <div className={styles.name}>To.{mockData.name}</div>
      {color === "purple" && <img className={styles.layer} src={purple} />}
      {color === "yellow" && <img className={styles.layer} src={yellow} />}
      {color === "blue" && <img className={styles.layer} src={blue} />}
      {color === "green" && <img className={styles.layer} src={green} />}
      <ContributorsInfo recentMessages={mockData.recentMessages} messageCount={mockData.messageCount} />
      <div className={styles.emojis}>
        {data.map((item) => <BadgeEmoji key={item.id} emoji={item.emoji} count={item.count}/>)}
      </div>
    </div>
  )
}

export default CardList
