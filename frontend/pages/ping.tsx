import Link from 'next/link'
import fetch from 'node-fetch'
import { StatelessComponent } from 'react'
import { GetServerSideProps } from 'next'

type Props = {
  ping: string
}

const Ping: StatelessComponent<Props> = ({ ping }) => {
  return (
    <>
      <h1>{ping}</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch('http://backend:9000/ping')
  const json = await res.json()

  return {
    props: {
      ping: json.ping,
    },
  }
}

export default Ping
