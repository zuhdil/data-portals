import React from 'react'
import { render } from '@testing-library/react'
import Ping, { getServerSideProps } from '../../pages/ping'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

describe('Ping page', () => {
  const server = setupServer(
    rest.get('http://backend:9000/ping', (_, res, ctx) => {
      return res(ctx.json({ ping: 'pong!' }))
    })
  )
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('matches snapshot', () => {
    const { asFragment } = render(<Ping ping="pong!" />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call backend endpoint', async () => {
    const response = await getServerSideProps()
    expect(response).toEqual({ props: { ping: 'pong!' } })
  })
})
