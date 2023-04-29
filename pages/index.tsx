import { Inter } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
const Home = () => {
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
    </>
  )
}
export default Home
