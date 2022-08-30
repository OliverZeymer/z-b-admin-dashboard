// PUT, PATCH, DELETE, POST, GET

import { useEffect, useState, useContext } from "react"

import tokenContext from "../contexts/tokenContext"

export default function useDynamicFetch(url) {
  const { token } = useContext(tokenContext)
  console.log(token)

  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(
    function () {
      // Dette er en IIFE (immediately invoked function expression)
      ;(async function () {
        try {
          const response = await fetch(`${url}`, {
            headers: {
              authorization: "Bearer " + token,
            },
          })

          const json = await response.json()
          console.log(json)
          setData(json)
          setIsLoading(false)
        } catch (error) {
          setError(error)
        }
      })()
    },
    [url, token]
  )

  return { data, isLoading, error }
}
