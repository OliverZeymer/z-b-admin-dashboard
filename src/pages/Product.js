/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Reorder } from "framer-motion"
import { useState } from "react"
import { BsPlusCircle } from "react-icons/bs"

const Product = () => {
  const style = css`
    grid-template-columns: 1fr 2fr 1fr;
  `

  const [imageList, setImageList] = useState([
    "https://picsum.photos/200",
    "https://picsum.photos/201",
    "https://picsum.photos/202",
    "https://picsum.photos/203",
  ])

  return (
    <section>
      <h2 className="mt-[140px] mb-9 text-2xl font-medium text-primary-text">
        Editing product - Apple airdots (#AH123)
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
              id="name"
            />
          </div>
          <div>
            <label htmlFor="description" className="text-primary-text mb-6">
              Description
            </label>
            <div
              contentEditable
              className="p-2 h-[176px] overflow-auto border w-full border-[rgba(19,19,19,0.25)] outline-none rounded-[3px] font-light focus:border-primary-placeholder placeholder:text-primary-placeholder bg-primary-input text-primary-placeholder"
              type="text"
              id="description"
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
              type="text"
              id="price"
            />
          </div>
          <div>
            <label htmlFor="weight" className="text-primary-text mb-6">
              Weight (In Grams)
            </label>
            <input
              className="p-2 border w-full border-[rgba(19,19,19,0.25)] outline-none rounded-[3px] font-light focus:border-primary-placeholder placeholder:text-primary-placeholder bg-primary-input text-primary-placeholder"
              type="text"
              id="weight"
            />
          </div>
          <div>
            <label htmlFor="stock" className="text-primary-text mb-6">
              Stock Amount
            </label>
            <input
              className="p-2 border w-full border-[rgba(19,19,19,0.25)] outline-none rounded-[3px] font-light focus:border-primary-placeholder placeholder:text-primary-placeholder bg-primary-input text-primary-placeholder"
              type="text"
              id="stock"
            />
          </div>
        </div>
      </div>
      <p className="text-primary-text mb-1 mt-8">Image control</p>
      <div className="p-5 max-w-[65%] border w-full border-[rgba(19,19,19,0.25)] outline-none rounded-[3px] font-light focus:border-primary-placeholder placeholder:text-primary-placeholder bg-primary-input text-primary-placeholder">
        <div className="flex justify-between">
          <p>Images (4) - drag to change index</p>
          <p className="flex items-center gap-2 cursor-pointer">
            Click here to upload
            <BsPlusCircle size="20px" />
          </p>
        </div>
        <Reorder.Group
          className="flex justify-between gap-5 mt-5"
          axis="x"
          values={imageList}
          onReorder={setImageList}
        >
          {imageList.map((image) => (
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
    </section>
  )
}

export default Product
