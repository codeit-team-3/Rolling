import React from "react"
import { Link } from "react-router-dom"
import styles from "./ButtonSecondary.module.css"

const ButtonSecondary = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  link = null,
}) => {
  const ButtonComponent = link ? Link : "button"

  return (
    <ButtonComponent
      to={link}
      className={styles[`btn-secondary-40`]}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonComponent>
  )
}

export default ButtonSecondary
