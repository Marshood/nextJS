import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const router = useRouter()
  const handlerClick = () => {
    console.log('Placing your order')
    router.push('/product')
    // router.replace('/product')
  }
  return (
    <>
      <h3>
        {' '}
        <Link href="/product">Products</Link>
      </h3>
      <h3>
        {' '}
        <Link href="/About">About</Link>
      </h3>
      <h3>
        <Link href="/blog">Blog</Link>
      </h3>

      <hr />
      <h1>Home Page</h1>

      <button onClick={handlerClick}>Place order</button>
    </>
  )
}
export default Home
