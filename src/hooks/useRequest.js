import { useCallback } from "react"
import fetcher from "../apis/api"

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
