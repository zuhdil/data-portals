import React from 'react'
import CustomApp from '../../pages/_app'
import Index from '../../pages/index'
import { renderMockRouter } from '../mocks/router'

describe('CustomApp layout', () => {
  it('matches snapshot', () => {
    const { asFragment } = renderMockRouter(<CustomApp Component={Index} />, {
      router: { pathname: '/' },
    })
    expect(asFragment()).toMatchSnapshot()
  })
})
