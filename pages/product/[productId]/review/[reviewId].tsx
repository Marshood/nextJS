import { useRouter } from 'next/router'

const Review = () => {
  const router = useRouter()
  const { productId, reviewId } = router?.query
  return (
    <>
      {productId && <h1> Details about product id : {productId}</h1>}
      {reviewId && <h2> Review id : {reviewId}</h2>}
    </>
  )
}
export default Review
