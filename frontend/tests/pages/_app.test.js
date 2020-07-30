import React from 'react'
import CustomApp from '../../pages/_app'
import { renderMockRouter } from '../mocks/router'

const Example = () => {
  return <div>Example</div>
}

describe('CustomApp layout', () => {
  it('matches snapshot', () => {
    const { asFragment } = renderMockRouter(<CustomApp Component={Example} />, {
      router: { pathname: '/' },
    })
    expect(asFragment()).toMatchSnapshot()
  })
})
