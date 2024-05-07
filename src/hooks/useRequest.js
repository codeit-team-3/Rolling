import { useCallback } from "react"
import fetcher from "../apis/axiosInstance"

const useRequest = () => {
  const request = useCallback(async (config) => {
    try {
      const responseData = await fetcher(config)
      return { data: responseData.data }
    } catch (error) {
      return { error: error }
    }
  }, [])

  return request
}

export default useRequest
