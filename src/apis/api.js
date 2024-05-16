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

export default fetcher
