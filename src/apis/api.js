import axios from "axios"

const TEAM_ID = "6-3"
const BASE_URL = `https://rolling-api.vercel.app/${TEAM_ID}`

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  header: { "Content-Type": "application/json" },
})

export const request = (config) => {
  const client = axiosInstance
  return client(config)
}

const fetcher = async (config) =>
  await request({ ...config })
    .then((response) => response)
    .catch((error) => {
      throw error
    })

export const createPost = async (postData) => {
  try {
    const response = await axiosInstance.post("/recipients/", postData)
    return response.data
  } catch (error) {
    console.error("포스트 생성 중 오류가 발생했습니다:", error) // 에러는 콘솔로만 출력
    throw error
  }
}

export default fetcher
