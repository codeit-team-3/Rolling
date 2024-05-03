import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import styles from "./ButtonPrimary.module.css"

const ButtonPrimary = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  size = 56,
}) => {
  return (
    <button
      className={clsx(styles.primaryButton, { [styles[`btn${size}`]]: size })}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["56", "40"]),
}

export default ButtonPrimary
