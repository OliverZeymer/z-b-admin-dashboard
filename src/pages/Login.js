import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object().shape({
  username: yup.string().required("You have to write an username."),
  password: yup.string().required("You have to write a password."),
})

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmitHandler = (data) => {
    console.log(data)
    reset()
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
            {...register("username")}
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
            {...register("password")}
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
        <button
          type="submit"
          aria-label="submit form button"
          spellCheck="false"
          className="bg-primary-color text-white p-4 font-semibold tracking-wider mt-5 focus:bg-primary-background focus:text-primary-color transition-colors"
        >
          LOG IN
        </button>
      </form>
    </section>
  )
}

export default Login
