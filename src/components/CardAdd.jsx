import styles from "./CardAdd.module.css"
import ButtonCircleAdd from "./ButtonCircleAdd"

const CardAdd = ({ onClickAddCardButton }) => {
  const handleAddCardButtonClick = () => {
    onClickAddCardButton()
  }

  return (
    <div className={styles.card}>
      <ButtonCircleAdd onClick={handleAddCardButtonClick} />
    </div>
  )
}

export default CardAdd
