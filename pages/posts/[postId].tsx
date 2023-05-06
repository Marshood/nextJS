const post = (props: {
  post: {
    body: string
    id: string
    title: string
    email: string
  }
}) => {
  const { post } = props
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
export default post

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
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context: { params: any }) {
  const { params } = context
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
  )
  const data = await response?.json()
  console.log(data)
  return { props: { post: data } }
}
