import React from 'react'
import { render } from '@testing-library/react'
import Data from '../../pages/data'

describe('Data page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Data />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
