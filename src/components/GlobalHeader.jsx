import React from "react"
import { Link } from "react-router-dom"
import Button from "./Button"
import logo from "../assets/logo.png"
import styles from "./GlobalHeader.module.css"

const GlobalHeader = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Rolling" />
      <Button.Outlined size="40">
        <Link to="/post">롤링 페이퍼 만들기</Link>
      </Button.Outlined>
    </div>
  )
}

export default GlobalHeader
