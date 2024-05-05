import axiosInstance, { performApiRequest } from "./axiosInstance.js"

export async function getMessage(id) {
  return performApiRequest(async () => {
    return await axiosInstance.post(`/messages/${id}/`)
  })
}

export async function updateMessage(id, data) {
  const mergedData = { ...data, team: "6-3" }
  return performApiRequest(async () => {
    return await axiosInstance.post(`/messages/${id}/`, mergedData)
  })
}

export async function partialUpdateMessage(id, data) {
  const mergedData = { ...data, team: "6-3" }
  return performApiRequest(async () => {
    return await axiosInstance.patch(`/messages/${id}/`, mergedData)
  })
}

export async function deleteMessage(id) {
  return performApiRequest(async () => {
    return await axiosInstance.delete(`/messages/${id}/`)
  })
}
