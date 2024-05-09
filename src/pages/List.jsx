import styles from "./List.module.css"
import { useState, useEffect, useCallback, useRef } from "react"
import CardList from "../components/CardList"
import ButtonPrimary from "../components/ButtonPrimary"
import useRequest from "../hooks/useRequest"
import React from "react"
import { useNavigate } from "react-router-dom"
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"
// import Swiper and modules styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"


const RECIPIENTS_LIMIT = 100

const List = () => {
  const request = useRequest()
  const [dataPopular, setDataPopular] = useState([])
  const [dataRecent, setDataRecent] = useState([])
  const [offset, setOffset] = useState(0)
  const nav = useNavigate()

  const getRecipientsPopular = async () => {
    const { data, error } = await request({
      url: "recipients/",
      method: "get",
      params: { limit: RECIPIENTS_LIMIT, offset: offset, sort: "like" },
    })

    if (data) setDataPopular(data.results)
    else if (error) console.log("오류로 리액션을 불러오는데에 실패하였습니다.")
  }

  const getRecipientsRecent = async () => {
    const { data, error } = await request({
      url: "recipients/",
      method: "get",
      params: { limit: RECIPIENTS_LIMIT, offset: offset },
    })

    if (data) setDataRecent(data.results)
    else if (error) console.log("오류로 리액션을 불러오는데에 실패하였습니다.")
  }

  useEffect(() => {
    getRecipientsPopular()
    getRecipientsRecent()
  }, [])

  return (
    <div className={styles.List}>
      <section className={styles.wrapper}>
        <div className={styles.header}>인기 롤링 페이퍼 🔥</div>
        <div className={styles.list}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
          >
            {dataPopular.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <CardList {...item} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>
      <secion className={styles.wrapper}>
        <div className={styles.header}>최근에 만든 롤링 페이퍼 ⭐️</div>
        <div className={styles.list}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
          >
            {dataRecent.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <CardList {...item} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </secion>
      <secion className={styles.button}>
        <ButtonPrimary
          onClick={() => {
            nav("/post")
          }}
        >
          나도 만들어보기
        </ButtonPrimary>
      </secion>
    </div>
  )
}

export default List
