import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import { Link } from "react-router-dom"
import "swiper/css/bundle"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import styles from "./List.module.css"
import useRequest from "../hooks/useRequest"
import useWindowSize from "../hooks/useWindowSize"
import CardList from "../components/CardList/CardList"
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
  
  const { width } = useWindowSize()
  const isMobile = width < 361

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
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <div className={styles.header}>인기 롤링 페이퍼 🔥</div>
        <div className={styles.list}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            navigation={{}}
            grabCursor={true}
            slidesPerView={"auto"}
          >
            {dataPopular.map((item) => {
              return (
                <SwiperSlide key={item.id}
                style={{ width: isMobile ? "208px" : "275px" }}
                >
                  <CardList {...item} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>
      <section className={styles.wrapper}>
        <div className={styles.header}>최근에 만든 롤링 페이퍼 ⭐️</div>
        <div className={styles.list}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            navigation={{}}
            grabCursor={true}
            slidesPerView={"auto"}
          >
            {dataRecent.map((item) => {
              return (
                <SwiperSlide
                  key={item.id}
                  style={{ width: isMobile ? "208px" : "275px" }}
                >
                  <CardList {...item} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>
      <Link to="/post" className={styles.button}>
        <ButtonPrimary>나도 만들어보기</ButtonPrimary>
      </Link>
    </div>
  )
}

export default List
