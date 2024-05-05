import React from "react"
import { Link } from "react-router-dom"
import clsx from "clsx"
import styles from "./ButtonOutlined.module.css"

const ButtonOutlined = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  size = 40,
  icon = "",
  link = null,
}) => {
  const ButtonComponent = link ? Link : "button"

  return (
    <ButtonComponent
      to={link}
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
    </ButtonComponent>
  )
}

export default ButtonOutlined
