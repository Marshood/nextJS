import Link from 'next/link'
import { useRouter } from 'next/router'

const PostList = (props: {
  posts: Array<{ id: string; title: string; email: string }>
}) => {
  const { posts } = props
  const router = useRouter()
  if (router.isFallback) {
    return <h1> Loading...</h1>
  }
  return (
    <>
      <h1>List Of Posts</h1>

      {posts?.map((post: { id: string; title: string }, key) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response?.json()
  // console.log(data)
  return { props: { posts: data } }
}

export default PostList
