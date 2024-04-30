import React from "react"
import PropTypes from "prop-types"
import styles from "./ButtonCircleAdd.module.css"

const Button = ({ onClick, disabled = false }) => {
  return (
    <button
      className={styles["btn-circle-add"]}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <i className="ic-plus"></i>
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default Button
