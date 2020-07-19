import React from 'react'
import { render } from '@testing-library/react'
import Water from '../../pages/water'

describe('Water page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Water />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
