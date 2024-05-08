import "../styles/icons.css"
import styles from "./ArrowButton.module.css"
import PropTypes from "prop-types"

function ArrowButton({ direction = "left", onClick }) {
  return (
    <button className={styles["arrow-button"]} onClick={onClick}>
      {direction === "left" && <i className="ic-arrow_left"></i>}
      {direction === "right" && <i className="ic-arrow_right"></i>}
    </button>
  )
}

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]),
  onClick: PropTypes.func,
}

export default ArrowButton
