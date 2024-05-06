import axiosInstance, { performApiRequest } from "./axiosInstance.js"

const DEFAULT_OPTIONS = {
  limit: 8,
  offset: 0,
}

export async function getRecipientsList(options = {}) {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options }

  return performApiRequest(async () => {
    return await axiosInstance.get(`/recipients/`, {
      params: mergedOptions,
    })
  })
}

export async function createRecipient(id, data) {
  const mergedData = { ...data, team: "6-3" }
  return performApiRequest(async () => {
    return await axiosInstance.post(`/recipients/`, mergedData)
  })
}

export async function getRecipient(id) {
  return performApiRequest(async () => {
    return await axiosInstance.get(`/recipients/${id}/`)
  })
}

export async function deleteRecipient(id) {
  return performApiRequest(async () => {
    return await axiosInstance.delete(`/recipients/${id}/`)
  })
}

export async function getRecipientReactions(id, options = {}) {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options }

  return performApiRequest(async () => {
    return await axiosInstance.get(`/recipients/${id}/reactions/`, {
      params: mergedOptions,
    })
  })
}

export async function createRecipientReaction(id, data) {
  return performApiRequest(async () => {
    return await axiosInstance.post(`/recipients/${id}/reactions/`, data)
  })
}

export async function getRecipientMessages(id, options = {}) {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options }

  return performApiRequest(async () => {
    return await axiosInstance.get(`/recipients/${id}/messages/`, {
      params: mergedOptions,
    })
  })
}

export async function createRecipientMessage(id, data) {
  const mergedData = { ...data, team: "6-3" }
  console.log(mergedData)

  return performApiRequest(async () => {
    return await axiosInstance.post(`/recipients/${id}/messages/`, mergedData)
  })
}
