/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Reorder } from "framer-motion"
import { useEffect, useState, useContext } from "react"
import { BsPlusCircle } from "react-icons/bs"
import useDynamicFetch from "../hooks/useDynamicFetch"
import { motion } from "framer-motion"
import addNotification from "../functions/addNotification"
import notificationContext from "../contexts/notificationContext"

// Yup scheme for validation
const schema = yup.object().shape({
  name: yup.string().required("You have to write an name."),
  description: yup.string().required("You have to write a description."),
  price: yup.string().required("You have to write a price."),
  weight: yup.string().required("You have to write a weight."),
  stock: yup.string().required("You have to write a stock."),
})

const ProductNew = () => {
  // productForm grid
  const style = css`
    grid-template-columns: 1fr 2fr 1fr;
  `

  // Yup resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmitHandler = (data) => {
    console.log("din na")
    console.log(data)
  }

  // Handling all fetchParams, when changes happen, the useDynamicFetch runs
  const [fetchParams, setFetchParams] = useState({
    params: "/products",
    method: "GET",
    data: null,
  })

  // Serving fetching (methods used: GET, POST, PATCH)
  const { fetchData, isLoading, error } = useDynamicFetch(fetchParams)

  // On fetchData change
  useEffect(() => {
    //console.log(fetchData)
  }, [fetchData, isLoading, error])

  // NEEDS TO BE CHANGED
  const [imageArray, setImageArray] = useState([
    "https://picsum.photos/200",
    "https://picsum.photos/201",
    "https://picsum.photos/202",
  ])

  return (
    <form
      noValidate
      className="flex flex-col relative"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <h2 className="mt-[140px] mb-9 text-2xl font-medium text-primary-text">
        Heading
      </h2>
      <div css={style} className="grid gap-[1.5vw]">
        <div className="h-300 w-300">
          <img
            className="w-full h-full"
            src="https://picsum.photos/200"
            alt="Airdots"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <label htmlFor="name" className="text-primary-text mb-6">
              Name
            </label>
            <input
              {...register("name")}
              className="p-2 border w-full border-[rgba(19,19,19,0.25)] outline-none rounded-[3px] font-light focus:border-primary-placeholder placeholder:text-primary-placeholder bg-primary-input text-primary-placeholder"
              type="text"
              name="name"
              id="name"
              autoComplete="off"
            />
            <p className="text-[1rem] text-red-600">{errors.name?.message}</p>
          </div>
          <div>
            <label htmlFor="description" className="text-primary-text mb-6">
              Description
            </label>
            <textarea
              {...register("description")}
              className="p-2 h-[176px] overflow-auto border w-full border-[rgba(19,19,19,0.25)] outline-none rounded-[3px] font-light focus:border-primary-placeholder placeholder:text-primary-placeholder bg-primary-input text-primary-placeholder"
              type="text"
              id="description"
              name="description"
            />
            <p className="text-[1rem] text-red-600">
              {errors.description?.message}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <label htmlFor="price" className="text-primary-text mb-6">
              Price
            </label>
            <input
              {...register("price")}
              className="p-2 border w-full border-[rgba(19,19,19,0.25)] outline-none rounded-[3px] font-light focus:border-primary-placeholder placeholder:text-primary-placeholder bg-primary-input text-primary-placeholder"
              type="number"
              id="price"
              name="price"
            />
            <p className="text-[1rem] text-red-600">{errors.price?.message}</p>
          </div>
          <div>
            <label htmlFor="weight" className="text-primary-text mb-6">
              Weight (In Grams)
            </label>
            <input
              {...register("weight")}
              className="p-2 border w-full border-[rgba(19,19,19,0.25)] outline-none rounded-[3px] font-light focus:border-primary-placeholder placeholder:text-primary-placeholder bg-primary-input text-primary-placeholder"
              type="number"
              id="weight"
              name="weight"
            />
            <p className="text-[1rem] text-red-600">{errors.weight?.message}</p>
          </div>
          <div>
            <label htmlFor="stock" className="text-primary-text mb-6">
              Stock Amount
            </label>
            <input
              {...register("stock")}
              className="p-2 border w-full border-[rgba(19,19,19,0.25)] outline-none rounded-[3px] font-light focus:border-primary-placeholder placeholder:text-primary-placeholder bg-primary-input text-primary-placeholder"
              type="number"
              id="stock"
              name="stock"
            />
            <p className="text-[1rem] text-red-600">{errors.stock?.message}</p>
          </div>
        </div>
      </div>
      <p className="text-primary-text mb-1 mt-8">Image control</p>
      <div className="p-5 max-w-fit border w-full border-[rgba(19,19,19,0.25)] outline-none rounded-[3px] font-light focus:border-primary-placeholder placeholder:text-primary-placeholder bg-primary-input text-primary-placeholder">
        <div className="flex justify-between">
          <p>Images (4) - drag to change index</p>
          <p className="flex items-center gap-2 cursor-pointer">
            Click here to upload
            <BsPlusCircle size="20px" />
          </p>
        </div>
        <Reorder.Group
          className="flex gap-5 mt-5"
          axis="x"
          values={imageArray}
          onReorder={setImageArray}
        >
          {imageArray.map((image) => (
            <Reorder.Item key={image} value={image}>
              <div className="max-h-50 max-w-50 shadow-lg cursor-grab">
                <img
                  className="pointer-events-none"
                  src={image}
                  alt="Airdots"
                />
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
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
        className="absolute right-0 bottom-0 bg-primary-color text-white px-10 py-6 font-semibold tracking-wider mt-5 focus:bg-primary-background focus:text-primary-color hover:bg-primary-background hover:text-primary-color border-2 border-primary-color transition-colors outline-none"
      >
        SUBMIT CHANGES
      </motion.button>
    </form>
  )
}

export default ProductNew
