const productArray = ['Product 1', 'Product 2', 'Product 3', 'Product 4']
const product = () => {
  return (
    <>
      {productArray?.map((product) => {
        return <h2> {product}</h2>
      })}
    </>
  )
}
export default product
