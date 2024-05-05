import ButtonCircleAdd from "./ButtonCircleAdd"
import styles from "./CardAdd.module.css"

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
