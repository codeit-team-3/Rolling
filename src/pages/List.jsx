import styles from "./List.module.css"
import { useState, useEffect, useCallback, useRef } from "react"
import CardList from "../components/CardList"
import ButtonPrimary from "../components/ButtonPrimary"
import useRequest from "../hooks/useRequest"
import React from "react"
import { useNavigate } from "react-router-dom"
// core version + navigation, pagination modules:
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"
// import Swiper and modules styles
import "swiper/css"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"

// const List = () => {

//   return (
//     <div className={styles.container}>
//       <Swiper
//         module={[Navigation, EffectFade]}
//         Navigation
//         effect
//         speed={800}
//         slidesPerView={1}
//         loop
//         className={styles.myswiper}
//       >
//         <SwiperSlide className={styles.swiperslide}>

//         </SwiperSlide>
//       </Swiper>
//     </div>
//   )
// }

const RECIPIENTS_LIMIT = 4

const List = () => {
  const request = useRequest()
  const [data, setData] = useState([])
  const [offset, setOffset] = useState(0)
  const nav = useNavigate()

  const getRecipients = async () => {
    const { data, error } = await request({
      url: "recipients/",
      method: "get",
      params: { limit: RECIPIENTS_LIMIT, offset: offset, sort: "like" },
    })

    if (data) setData(data.results)
    else if (error) console.log("오류로 리액션을 불러오는데에 실패하였습니다.")
  }

  useEffect(() => {
    getRecipients()
  }, [])

  return (
    <div className={styles.List}>
      <section className={styles.wrapper}>
        <div className={styles.header}>인기 롤링 페이퍼 🔥</div>
        <div className={styles.list}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {data.map((item) => {
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
          {data.map((item) => {
            return <CardList key={item.id} {...item} />
          })}
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
