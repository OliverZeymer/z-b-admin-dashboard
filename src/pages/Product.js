/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Reorder, useForceUpdate } from "framer-motion"
import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { BsPlusCircle } from "react-icons/bs"
import useDynamicFetch from "../hooks/useDynamicFetch"
import { motion } from "framer-motion"
import addNotification from "../functions/addNotification"
import notificationContext from "../contexts/notificationContext"

const Product = () => {
  const style = css`
    grid-template-columns: 1fr 2fr 1fr;
  `

  // Importing notification context to send to addNotification function
  const { setNotification } = useContext(notificationContext)

  // Handles all productDataFields
  const [productDataFields, setProductDataFields] = useState({
    id: "",
    name: "",
    description: "",
    price: 0,
    weight: 0,
    stock: 0,
    images: [
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
      "https://picsum.photos/200",
    ],
  })

  const [showBtn, setShowBtn] = useState(false)

  // Handles the heading
  const [heading, setHeading] = useState(
    "Editing product - Apple airdots (#AH123)"
  )

  // Importing useParams to get the id from the url
  // If id is "add", then we will render the form to add a new product
  const { id: param } = useParams()

  // FOR TESTING
  const {
    fetchData: isData,
    isLoading: atLoading,
    error: whatError,
  } = useDynamicFetch({
    params: "/products",
    method: "GET",
    data: null,
  })
  useEffect(() => {
    console.log(isData)
  }, [isData])

  const [params, setParams] = useState(null)
  const [method, setMethod] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (param === "add") {
      setHeading("Now adding new product...")
      setMethod("POST")
    } else {
      setHeading("Loading product...")
      setParams(`/products/${param}`)
      setMethod("GET")
    }
  }, [])

  // product ID: qw78ge
  const { fetchData, isLoading, error } = useDynamicFetch({
    params: params,
    method: method,
    data: data,
  })

  let navigate = useNavigate()

  useEffect(() => {
    if (method === "GET") {
      setHeading(`Editing product - ${fetchData.name} (${fetchData.id})`)
      setProductDataFields((prevState) => {
        return {
          ...prevState,
          id: fetchData.id,
          name: fetchData.name,
          description: fetchData.description,
          price: fetchData.price,
          weight: fetchData.weightInGrams,
          stock: fetchData.stock,
          images: fetchData.images,
        }
      })
    } else if (method === "POST") {
      setData(productDataFields)
      addNotification({
        text: "Product added saved succesfully!",
        setNotification,
      })
      setHeading(`Editing product - ${fetchData.name} (${fetchData.id})`)
      // Somewhere in your code, e.g. inside a handler:
      navigate(`/product/${fetchData.id}`)
      setTimeout(() => {
        setParams(null)
        setMethod(null)
      }, 500)
    }
  }, [fetchData])

  // For controling the imageArray with framer reOrder
  const [imageArray, setImageArray] = useState([
    "https://picsum.photos/200",
    "https://picsum.photos/201",
  ])
  // For updating in productDataFields when images change
  useEffect(() => {
    setProductDataFields((prevState) => ({ ...prevState, images: imageArray }))
  }, [imageArray])

  // Handles change for productDataFields and replacing in object
  function handleChange(event) {
    setShowBtn(true)
    const { name, value, type, checked } = event.target
    setProductDataFields((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      }
    })
  }

  // On form submit, we will send the productDataFields to the server
  function handleSubmit(event) {
    event.preventDefault()
    if (param === "add") {
      setParams("/products")
      setMethod("POST")
      console.log("submit nu")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col relative">
      <h2 className="mt-[140px] mb-9 text-2xl font-medium text-primary-text">
        {heading}
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
              className="p-2 border w-full border-[rgba(19,19,19,0.25)] outline-none rounded-[3px] font-light focus:border-primary-placeholder placeholder:text-primary-placeholder bg-primary-input text-primary-placeholder"
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              onChange={handleChange}
              value={productDataFields.name}
            />
          </div>
          <div>
            <label htmlFor="description" className="text-primary-text mb-6">
              Description
            </label>
            <textarea
              className="p-2 h-[176px] overflow-auto border w-full border-[rgba(19,19,19,0.25)] outline-none rounded-[3px] font-light focus:border-primary-placeholder placeholder:text-primary-placeholder bg-primary-input text-primary-placeholder"
              type="text"
              id="description"
              name="description"
              onChange={handleChange}
              value={productDataFields.description}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <label htmlFor="price" className="text-primary-text mb-6">
              Price
            </label>
            <input
              className="p-2 border w-full border-[rgba(19,19,19,0.25)] outline-none rounded-[3px] font-light focus:border-primary-placeholder placeholder:text-primary-placeholder bg-primary-input text-primary-placeholder"
              type="number"
              id="price"
              name="price"
              onChange={handleChange}
              value={productDataFields.price}
            />
          </div>
          <div>
            <label htmlFor="weight" className="text-primary-text mb-6">
              Weight (In Grams)
            </label>
            <input
              className="p-2 border w-full border-[rgba(19,19,19,0.25)] outline-none rounded-[3px] font-light focus:border-primary-placeholder placeholder:text-primary-placeholder bg-primary-input text-primary-placeholder"
              type="number"
              id="weight"
              name="weight"
              onChange={handleChange}
              value={productDataFields.weight}
            />
          </div>
          <div>
            <label htmlFor="stock" className="text-primary-text mb-6">
              Stock Amount
            </label>
            <input
              className="p-2 border w-full border-[rgba(19,19,19,0.25)] outline-none rounded-[3px] font-light focus:border-primary-placeholder placeholder:text-primary-placeholder bg-primary-input text-primary-placeholder"
              type="number"
              id="stock"
              name="stock"
              onChange={handleChange}
              value={productDataFields.stock}
            />
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
      {showBtn && (
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
      )}
    </form>
  )
}

export default Product
