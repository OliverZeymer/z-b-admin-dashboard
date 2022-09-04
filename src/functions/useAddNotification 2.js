import { nanoid } from "nanoid"

import { useContext, useEffect } from "react"
import notificationContext from "../contexts/notificationContext"

export default function useAddNotification({
  text,
  bgColor,
  txtColor,
  icon,
  removeDelay,
}) {
  // Importing context
  const { setNotification } = useContext(notificationContext)

  // Setting defaults if not provided
  if (!text) text = "Put in message here"
  if (!icon) icon = true
  if (!bgColor) bgColor = "#DFFCE4"
  if (!txtColor) txtColor = "#000000"
  if (!removeDelay) removeDelay = 6000

  // Adding new msg to notification array in context
  useEffect(() => {
    setNotification((prevState) => [
      ...prevState,
      { id: nanoid(), text, bgColor, txtColor, icon, removeDelay },
    ])
  }, [text, bgColor, txtColor, setNotification, icon, removeDelay])
}
