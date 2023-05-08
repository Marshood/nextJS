import { useRouter } from 'next/router'
import Description from '../../../../YAs/Fitness-Instructors-App/frontend/src/components/Description/Description'

const Product = (props: {
  product: {
    body: string
    id: string
    title: string
    description: string
    price: number
  }
}) => {
  const { product } = props
  const router = useRouter()
  if (router.isFallback) {
    return <h1> Loading...</h1>
  }
  return (
    product && (
      <>
        <h1> post id </h1>
        <div key={product?.id}>
          <h2>
            {product?.id} {product.title} {product.price}
          </h2>
          <p> {product.description}</p>
        </div>
      </>
    )
  )
}
export default Product

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await response?.json()
  const paths = data.map((product: { id: any }) => {
    return {
      params: {
        product: `${product.id}`,
      },
    }
  })
  return {
    paths: [
      {
        params: { productId: '1' },
      },
      {
        params: { productId: '2' },
      },
      {
        params: { productId: '3' },
      },
    ],
    fallback: false, //'blocking',
  }
  // return {
  //   paths,
  //   fallback: false,
  // }
}

export async function getStaticProps(context: { params: any }) {
  const { params } = context
  console.log('Generating page for /products/', params.productId)
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`,
  )
  const data = await response?.json()
  if (!data.id) {
    return {
      notFound: true,
    }
  }
  // console.log(data)
  return { props: { product: data }, revalidate: 5 }
}
