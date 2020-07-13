import Link from 'next/link'

function HomePage() {
  return (
    <>
      <h1>Welcome to Next.js!</h1>
      <Link href="/ping">
        <a>Ping backend</a>
      </Link>
    </>
  )
}

export default HomePage
