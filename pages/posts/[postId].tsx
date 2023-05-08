import { useRouter } from 'next/router'

const Post = (props: {
  post: {
    body: string
    id: string
    title: string
    email: string
  }
}) => {
  const { post } = props
  const router = useRouter()
  if (router.isFallback) {
    return <h1> Loading...</h1>
  }
  return (
    post && (
      <>
        <h1> post id </h1>
        <div key={post?.id}>
          <h2>
            {post?.id} {post.title}
          </h2>
          <p> {post.body}</p>
        </div>
        /
      </>
    )
  )
}
export default Post

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await response?.json()
  const paths = data.map((post: { id: any }) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    }
  })
  return {
    paths: [
      {
        params: { postId: '1' },
      },
      {
        params: { postId: '2' },
      },
      {
        params: { postId: '3' },
      },
    ],
    fallback: true,
  }
  // return {
  //   paths,
  //   fallback: false,
  // }
}

export async function getStaticProps(context: { params: any }) {
  const { params } = context
  console.log('Generating page for /posts/', params.postId)
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
  )
  const data = await response?.json()
  if (!data.id) {
    return {
      notFound: true,
    }
  }
  // console.log(data)
  return { props: { post: data } }
}
