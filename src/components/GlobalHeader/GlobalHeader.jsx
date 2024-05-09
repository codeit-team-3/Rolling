import React from "react"
import { Link, useLocation } from "react-router-dom"
import Button from "../Button/Button"
import logo from "../assets/logo.png"
import styles from "./GlobalHeader.module.css"

const GlobalHeader = () => {
  const { pathname } = useLocation()

  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <Link to="/">
          <img src={logo} alt="Rolling" />
        </Link>
        {!pathname.includes("post") && (
          <Button.Outlined size="40">
            <Link to="/post"> 롤링 페이퍼 만들기</Link>
          </Button.Outlined>
        )}
      </div>
    </div>
  )
}

export default GlobalHeader
