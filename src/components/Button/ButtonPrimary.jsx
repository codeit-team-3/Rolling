import React from "react"
import { Link } from "react-router-dom"
import clsx from "clsx"
import styles from "./ButtonPrimary.module.css"

const ButtonPrimary = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  size = 56,
  link = null,
}) => {
  const ButtonComponent = link ? Link : "button"

  return (
    <ButtonComponent
      to={link}
      className={clsx(styles.primaryButton, { [styles[`btn${size}`]]: size })}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonComponent>
  )
}

export default ButtonPrimary
