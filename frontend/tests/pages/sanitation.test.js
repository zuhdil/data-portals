import React from 'react'
import { render } from '@testing-library/react'
import Sanitation from '../../pages/sanitation'

describe('Sanitation page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Sanitation />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
