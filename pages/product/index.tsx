import Link from 'next/link'

const productArray = ['Product 1', 'Product 2', 'Product 3', 'Product 4']
const product = ({ productId = 100 }) => {
  return (
    <>
      <Link href="/">Home</Link>
      <hr />
      {productArray?.map((product) => {
        return (
          <h2>
            <Link href={`/product/${product}`}>{product}</Link>
          </h2>
        )
      })}
      <h2>
        <Link href={`/product/${productId}`}>product {productId}</Link>
      </h2>
      <h2>
        <Link href={`/product/${productId}`} replace>
          replace statue {productId}
        </Link>
      </h2>
    </>
  )
}
export default product
