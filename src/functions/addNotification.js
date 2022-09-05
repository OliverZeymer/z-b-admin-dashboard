import { nanoid } from "nanoid"

export default function addNotification({
  text,
  bgColor,
  txtColor,
  icon,
  removeDelay,
  setNotification,
}) {
  // Setting defaults if not provided
  if (!text) text = "Put in message here"
  if (!icon) icon = true
  if (!bgColor) bgColor = "#DFFCE4"
  if (!txtColor) txtColor = "#000000"
  if (!removeDelay) removeDelay = 6000

  setNotification((prevState) => [
    ...prevState,
    { id: nanoid(), text, bgColor, txtColor, icon, removeDelay },
  ])
}
