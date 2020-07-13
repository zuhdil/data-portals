import Link from 'next/link'
import fetch from 'node-fetch'

type Props = {
  ping: string
}

function Ping({ ping }: Props) {
  return (
    <>
      <h1>{ping}</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://backend:9000/ping')
  const json = await res.json()

  return {
    props: {
      ping: json.ping,
    },
  }
}

export default Ping
