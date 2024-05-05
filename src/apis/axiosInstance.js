import axios from "axios"

const TEAM_ID = "6-3"
const BASE_URL = `https://rolling-api.vercel.app/${TEAM_ID}`

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  header: { "Content-Type": "application/json" },
})

export async function performApiRequest(requestFunction) {
  try {
    const response = await requestFunction()
    return response.data
  } catch (error) {
    console.error("API 요청 중 오류가 발생했습니다:", error)
    throw error
  }
}

export default axiosInstance
