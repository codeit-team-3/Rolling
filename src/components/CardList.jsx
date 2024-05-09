import axios from "axios"
import ContributorsInfo from "./ContributorsInfo"
import BadgeEmoji from "./BadgeEmoji"


const fetchData = async () => {
  const response = await axios.get('https://rolling-api.vercel.app/6-3/recipients/')
  const data = response.data.results
  return data
}


const CardList = () => {

  return(
    <>
      {data.map((item) => {
        return (
          <div className="cardList" key={item.id}>
            <section className="name">
              {`To. ${item.name}`}
            </section>
            <section className="contributors">
              <ContributorsInfo 
                recentMessages={recentMessages} 
                messageCount={messageCount}/>
            </section>
            <section className="emoji">
              <BadgeEmoji 
                emoji={emoji} 
                count={count}/>
              </section>
          </div> 
          )
      })}      
    </>
  )
}

export default CardList