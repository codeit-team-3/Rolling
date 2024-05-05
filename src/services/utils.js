import axios from "axios"

const TEAM_ID = "1-4"
const BASE_URL = `https://rolling-api.vercel.app/${TEAM_ID}`

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  header: { "Content-Type": "application/json" },
})

export function formatDateString(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}