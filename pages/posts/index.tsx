import Link from 'next/link'
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react'

const PostList = (props: {
  posts: Array<{ id: string; title: string; email: string }>
}) => {
  const { posts } = props
  return (
    <>
      <h1>List Of POsts</h1>

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
  console.log(data)
  return { props: { posts: data } }
}

export default PostList
