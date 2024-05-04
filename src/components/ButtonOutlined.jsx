import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import styles from "./ButtonOutlined.module.css"

const ButtonOutlined = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  size = "",
  icon = "",
}) => {
  return (
    <button
      className={clsx(styles.outlinedButton, {
        [styles[`btn${size}`]]: size,
        [styles.iconButton]: icon,
      })}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && !disabled && <i className={`ic-${icon}`}></i>}
      {icon && disabled && <i className={`ic-${icon}-white`}></i>}
      {children}
    </button>
  )
}

ButtonOutlined.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  icon: PropTypes.string,
}

export default ButtonOutlined
