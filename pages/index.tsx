import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>

      <Link href={`posts`}>
        <h2>POsts </h2>
      </Link>
    </>
  )
}
