import { useState, useEffect, useCallback, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import styles from "./List.module.css"
import useRequest from "../hooks/useRequest"
import CardList from '../components/CardList/CardList'
import ButtonPrimary from "../components/Button/ButtonPrimary"


const RECIPIENTS_LIMIT = 100

const List = () => {
  const request = useRequest()
  const [dataPopular, setDataPopular] = useState([])
  const [dataRecent, setDataRecent] = useState([])

  const getRecipientsPopular = async () => {
    const { data, error } = await request({
      url: "recipients/",
      method: "get",
      params: { limit: RECIPIENTS_LIMIT, sort: "like" },
    })

    if (data) setDataPopular(data.results)
    else if (error) console.log("오류로 리액션을 불러오는데에 실패하였습니다.")
  }

  const getRecipientsRecent = async () => {
    const { data, error } = await request({
      url: "recipients/",
      method: "get",
      params: { limit: RECIPIENTS_LIMIT },
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
        <ButtonPrimary link="/post">
          나도 만들어보기
        </ButtonPrimary>
      </secion>
    </div>
  )
}

export default List
