import React from 'react'
import { render } from '@testing-library/react'
import Home, { getServerSideProps, formatPercentage } from '../../pages/index'
import { server, rest } from '../mocks/server'
import { API_URL } from '../../config'

describe('Home page', () => {
  const fakeData = {
    Region: 'Foo',
    PMH: 1,
    Puits: 1,
    SAEP: 1,
  }

  it('matches snapshot', () => {
    const { asFragment } = render(<Home dataset={[fakeData]} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call backend for dataset', async () => {
    server.use(
      rest.get(API_URL + '/functionality-rate-by-region', (_, res, ctx) => {
        return res(ctx.json([fakeData]))
      })
    )
    const response = await getServerSideProps()
    expect(response).toEqual({ props: { dataset: [fakeData] } })
  })
})

test('formatPercentage', () => {
  const result = formatPercentage(100)
  expect(result).toEqual('100%')
})
