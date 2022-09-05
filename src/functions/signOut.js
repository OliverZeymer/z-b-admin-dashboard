import { useNavigate } from "react-router-dom"
import tokenContext from "../contexts/tokenContext"
import { useContext } from "react"

export default function signout() {
  const { setToken } = useContext(tokenContext)
  const navigate = useNavigate()
  setToken(null)
  navigate("/")
}
