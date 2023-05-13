const NewsArticleListByCategory = ({ articles, category }: any) => {
  return (
    <>
      <h1>
        showing news for category <i>{category}</i>
      </h1>

      {articles?.map((article: any) => {
        return (
          <div key={article.id}>
            <h2>
              {' '}
              {article.id} {article.title}
            </h2>
            <p> {article.description}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
}
export default NewsArticleListByCategory

export async function getServerSideProps(context: any) {
  const { params, req, res, query } = context
  console.log('!!req', req.headers.cookie)
  console.log('!!query', query)

  res.setHeader('Set-Cookie', ['name=Vishwas'])
  //   console.log('!!res', res)

  const { category } = params
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`,
  )
  const data = await response.json()

  return {
    props: {
      articles: data,
      category,
    },
  }
}
