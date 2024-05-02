import axios from "axios"

// const BASE_URL = "https://rolling-api.vercel.app/6-3"
const BASE_URL = "https://rolling-api.vercel.app/1-4"

export async function getRecipient(recipientId) {
  try {
    const response = await axios.get(`${BASE_URL}/recipients/${recipientId}/`)
    return response
  } catch (error) {
    console.error("데이터를 가져오는 동안 오류가 발생했습니다:", error)
  }
}
