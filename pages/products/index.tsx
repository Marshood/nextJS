import Link from 'next/link'
import { useRouter } from 'next/router'

const ProductsList = (props: {
  products: Array<{ price: number; id: string; title: string; email: string }>
}) => {
  const { products } = props
  const router = useRouter()
  if (router.isFallback) {
    return <h1> Loading...</h1>
  }
  return (
    <>
      <h1>List Of Products</h1>

      {products?.map(
        (product: { price: number; id: string; title: string }) => {
          return (
            <div key={product.id}>
              <Link href={`products/${product.id}`}>
                <h2>
                  {product.title} {product.price}
                </h2>
              </Link>
              <hr />
            </div>
          )
        },
      )}
    </>
  )
}

export async function getStaticProps() {
  try {
    const response = await fetch('http://localhost:4000/products/')
    const data = await response?.json()
    return { props: { products: data }, revalidate: 3 }
  } catch (err) {
    return { props: { products: [] }, revalidate: 3 }
  }
}

export default ProductsList
