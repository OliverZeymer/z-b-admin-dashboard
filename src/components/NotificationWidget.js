import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import notificationContext from "../contexts/notificationContext"
import { IoCheckmarkCircleOutline } from "react-icons/io5"
import { AiOutlineClose } from "react-icons/ai"

import useDynamicFetch from "../hooks/useDynamicFetch"

const NotificationWidget = () => {
  const { notification, setNotification } = useContext(notificationContext)

  function delNotification(id) {
    // Returns all notifications except the one with the id
    setNotification((prevState) => prevState.filter((item) => item.id !== id))
  }

  useDynamicFetch({
    params: "/orders",
    method: "POST",
    data: {
      parcelStatus: false,
      shippingStatus: false,
      orderDate: "2018-01-01",
      subTotal: 1350,
      customerName: "Benjamin Zeymer",
      shippingAddress: {
        address: "Eligötenstreet 11",
        postalCode: "20354",
        city: "Roskilde",
        country: "Denmark",
      },
      billingAddress: {
        address: "Eligötenstreet 11",
        postalCode: "20354",
        city: "Roskilde",
        country: "Denmark",
      },
      boughtProducts: [
        {
          productId: "#AHGA68",
          productName: "Apple Airpods Pro Max",
          price: 100,
          quantity: 1,
        },
        {
          productId: "#AHGA69",
          productName: "MacBook Pro Air Let",
          price: 1250,
          quantity: 1,
        },
      ],
    },
  })

  return (
    <ul className="absolute right-2 top-5 flex flex-col gap-3">
      <AnimatePresence>
        {notification.map((notification) => {
          const { id, text, icon, removeDelay, bgColor, txtColor } =
            notification

          // Removing notification after set time
          setTimeout(() => {
            delNotification(id)
          }, removeDelay)

          return (
            <motion.li
              key={id}
              initial={{ scale: 0.8, x: 100, opacity: 0 }}
              animate={{ scale: 1, x: 0, opacity: 1 }}
              exit={{ scale: 1, opacity: 0 }}
              transition={{ type: "spring", stiffness: 130 }}
              className="bg-slate-200 text-1xl px-8 py-4 rounded-full flex items-center gap-2 shadow-sm relative"
              style={{ backgroundColor: bgColor, color: txtColor }}
            >
              {icon && <IoCheckmarkCircleOutline className="text-2xl" />}
              <p className="mr-2">{text}</p>
              <AiOutlineClose
                onClick={() => delNotification(id)}
                className="absolute right-0 top-0 cursor-pointer p-3 box-content"
              />
            </motion.li>
          )
        })}
      </AnimatePresence>
    </ul>
  )
}

export default NotificationWidget
