import styles from "./ArrowButton.module.css"

function ArrowButton({ direction = "left", onClick }) {
  return (
    <button className={styles["arrow-button"]} onClick={onClick}>
      {direction === "left" && <i className="ic-arrow_left"></i>}
      {direction === "right" && <i className="ic-arrow_right"></i>}
    </button>
  )
}

export default ArrowButton
