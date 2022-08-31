/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const Product = () => {
  const style = css`
    grid-template-columns: 1fr 2fr 1fr;
  `

  return (
    <section>
      <h1>Editing product - Apple airdots (#AH123)</h1>
      <div css={style} className="grid">
        <p>hej</p>
        <p>hej</p>
        <p>hej</p>
      </div>
    </section>
  )
}

export default Product
