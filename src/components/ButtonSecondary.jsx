import React from "react"
import PropTypes from "prop-types"
import styles from "./ButtonSecondary.module.css"

const ButtonSecondary = ({
  children,
  type = "button",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={styles[`btn-secondary-40`]}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

ButtonSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default ButtonSecondary
