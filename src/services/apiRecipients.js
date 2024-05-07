import { axiosInstance } from "./utils.js"

export async function getRecipientsList() {
  try {
    const response = await axiosInstance.get(`/recipients/`)
    return response.data
  } catch (error) {
    console.error("recipient 목록을 가져오는 동안 오류가 발생했습니다:", error)
  }
}

export async function createRecipient(data) {
  try {
    const response = await axiosInstance.post(`/recipients/`, data)
    return response.data
  } catch (error) {
    console.error("recipient를 생성하는 동안 오류가 발생했습니다:", error)
  }
}

export async function getRecipient(recipientId) {
  try {
    const response = await axiosInstance.get(`/recipients/${recipientId}/`)
    return response.data
  } catch (error) {
    console.error("recipient를 가져오는 동안 오류가 발생했습니다:", error)
  }
}

export async function deleteRecipient(recipientId) {
  try {
    const response = await axiosInstance.delete(`/recipients/${recipientId}/`)
    return response.data
  } catch (error) {
    console.error("recipient를 삭제하는 동안 오류가 발생했습니다:", error)
  }
}

export async function getRecipientReaction(recipientId, limit, offset) {
  try {
    const response = await axiosInstance.get(
      `/recipients/${recipientId}/reactions/`,
      {
        params: {
          limit: limit,
          offset: offset,
        },
      },
    )
    return response.data
  } catch (error) {
    console.error(
      "recipient reactions을 가져오는 동안 오류가 발생했습니다:",
      error,
    )
  }
}

export async function createRecipientReaction(recipientId, data) {
  try {
    const response = await axiosInstance.post(
      `/recipients/${recipientId}/reactions/`,
      data,
    )
    return response.data
  } catch (error) {
    console.error(
      "recipient reaction을 생성하는 동안 오류가 발생했습니다:",
      error,
    )
  }
}

export async function getRecipientMessages(recipientId) {
  try {
    const response = await axiosInstance.get(
      `/recipients/${recipientId}/messages/`,
    )
    return response.data
  } catch (error) {
    console.error(
      "recipient 메시지를 가져오는 동안 오류가 발생했습니다:",
      error,
    )
  }
}

export async function createRecipientMessage(recipientId, data) {
  try {
    const response = await axiosInstance.post(
      `/recipients/${recipientId}/messages/`,
      data,
    )
    return response.data
  } catch (error) {
    console.error(
      "recipient 메시지를 생성하는 동안 오류가 발생했습니다:",
      error,
    )
  }
}
