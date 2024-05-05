import React, { useEffect, useState } from "react"

const useRequest = (apiFunction) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const responseData = await apiFunction()
        setData(responseData)
        setError(null)
      } catch (error) {
        setError(error)
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, error, loading }
}

export default useRequest
