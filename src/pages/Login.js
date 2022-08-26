import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { motion } from "framer-motion"
import { useState, useContext } from "react"
import { AnimatePresence } from "framer-motion"
import tokenContext from "../contexts/tokenContext"

// Yup validation
const schema = yup.object().shape({
  username: yup.string().required("You have to write an username."),
  password: yup.string().required("You have to write a password."),
})

const Login = () => {
  // Token context
  const { setToken } = useContext(tokenContext)

  // Error message from server
  const [errMsgFromServer, setErrMsgFromServer] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmitHandler = (data) => {
    // Post userdata to server
    fetch("https://admin-dashboard-be.herokuapp.com/auth", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      // Formatting data
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      // Error handling
      .then((res) => {
        // Successful
        if (res.status >= "200" && res.status <= "299") {
          return res.json()
          // Client error
        } else if (res.status >= "400" && res.status <= "499") {
          throw new Error("Username or password is incorrect.")
          // Server error
        } else if (res.status >= "500" && res.status <= "599") {
          throw new Error("Something went wrong, try again...")
        }
      })
      // If good, set token in context
      .then((data) => {
        setToken(data.token)
      })
      .catch((err) => {
        // Set error message in state
        setErrMsgFromServer(err.toString())
      })
    // Resets password if error
    reset({
      password: null,
    })
  }

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-primary-color text-3xl sm:text-6xl font-bold mt-[110px]">
        Eligöten.
      </h2>
      <form
        noValidate
        className="flex flex-col gap-5 max-w-[535px] w-[90%] text-md sm:text-2xl"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="flex flex-col mt-[88px]">
          <label htmlFor="username" className="">
            Username
          </label>
          <input
            {...register("username", {
              // Resets error from server when user types
              onChange: (e) => {
                setErrMsgFromServer(null)
              },
            })}
            className={`bg-primary-background p-4 focus:outline-text-primary-color mt-2 ${
              errors.username && "shake"
            }`}
            type="text"
            id="username"
            placeholder="Enter Username"
            autoComplete="off"
          />
          <p className="text-[1rem] text-red-600">{errors.username?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            {...register("password", {
              // Resets error from server when user types
              onChange: (e) => {
                setErrMsgFromServer(null)
              },
            })}
            className={`bg-primary-background p-4 focus:outline-text-primary-color mt-2 ${
              errors.password && "shake"
            }`}
            type="password"
            id="password"
            placeholder="Enter Password"
            autoComplete="off"
          />
          <p className="text-[1rem] text-red-600">{errors.password?.message}</p>
        </div>
        <motion.button
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          aria-label="submit form button"
          spellCheck="false"
          className="bg-primary-color text-white p-4 font-semibold tracking-wider mt-5 focus:bg-primary-background focus:text-primary-color hover:bg-primary-background hover:text-primary-color border-2 border-primary-color transition-colors outline-none"
        >
          LOG IN
        </motion.button>
        <AnimatePresence>
          {errMsgFromServer && (
            // Animates error message from server in/out (conditional rendering)
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-[1rem] text-red-600"
            >
              {errMsgFromServer}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </section>
  )
}

export default Login
