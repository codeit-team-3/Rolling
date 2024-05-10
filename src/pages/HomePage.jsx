import React from "react"
import { Link } from "react-router-dom"
import styles from "./HomePage.module.css"
import Button from "../components/Button/Button"
import Img_Frame from "../assets/img-banner_frame.svg"
import Img_Emoji from "../assets/img-banner_emoji.png"

const HomePage = () => {
  return (
    <>
      <div className={styles.Main_Banner}>
        <div className={styles.Point_Container}>
          <div className={styles.Point}>
            <div className={styles.Point1_Container1}>
              <h2 className={styles.Point_Tag}>Point. 01</h2>
              <h1 className={styles.Point_Title}>
                누구나 손쉽게, 온라인
                <br />
                롤링 페이퍼를 만들 수 있어요
              </h1>
              <h2 className={styles.Point_Description}>
                로그인 없이 자유롭게 만들어요.
              </h2>
            </div>
            <div className={styles.Point1_Container2}>
              <img src={Img_Frame} alt="frame image" />
            </div>
          </div>
          <div className={styles.Point}>
            <div className={styles.Point2_Container1}>
              <img
                className={styles.Img_Emoji}
                src={Img_Emoji}
                alt="emoji image"
              />
            </div>
            <div className={styles.Point2_Container2}>
              <h2 className={styles.Point_Tag}>Point. 02</h2>
              <h1 className={styles.Point_Title}>
                서로에게 이모지로 감정을 <br />
                표현해보세요
              </h1>
              <h2 className={styles.Point_Description}>
                롤링 페이퍼에 이모지를 추가할 수 있어요.
              </h2>
            </div>
          </div>
        </div>
        <Link to="/list">
          <Button.Primary size="56">구경해보기</Button.Primary>
        </Link>
      </div>
    </>
  )
}

export default HomePage
