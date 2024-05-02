import { axiosInstance } from "./utils.js"

export async function getMessage(id) {
  try {
    const response = await axiosInstance.get(`/messages/${id}/`)
    return response.data
  } catch (error) {
    console.error("메시지를 가져오는 동안 오류가 발생했습니다:", error)
  }
}

export async function updateMessage(id, data) {
  try {
    const response = await axiosInstance.put(`/messages/${id}/`, data)
    return response.data
  } catch (error) {
    console.error("메시지를 업데이트하는 동안 오류가 발생했습니다:", error)
  }
}

export async function partialUpdateMessage(id, data) {
  try {
    const response = await axiosInstance.patch(`/messages/${id}/`, data)
    return response.data
  } catch (error) {
    console.error(
      "메시지를 부분적으로 업데이트하는 동안 오류가 발생했습니다:",
      error,
    )
  }
}

export async function deleteMessage(id) {
  try {
    const response = await axiosInstance.delete(`/messages/${id}/`)
    return response.data
  } catch (error) {
    console.error("메시지를 삭제하는 동안 오류가 발생했습니다:", error)
  }
}
