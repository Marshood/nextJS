const post = (props: {
  post: { id: string; title: string; email: string }
}) => {
  const { post } = props
  console.log('po', post)
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
  //ssg
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
