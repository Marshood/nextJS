import Link from 'next/link'

export default function NewsArticleList({ atricles }) {
  return (
    <>
      <h1>list of news article</h1>
      {atricles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title} | {article.category}
            </h2>
          </div>
        )
      })}
      {/* <Link href={`posts`}>
        <h2>News </h2>
      </Link> */}
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news')
  const data = await response.json()
  return {
    props: {
      atricles: data,
    },
  }
}
