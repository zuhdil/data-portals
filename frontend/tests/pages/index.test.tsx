import React from 'react'
import { render } from '@testing-library/react'
import HomePage from '../../pages/index'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<HomePage />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
