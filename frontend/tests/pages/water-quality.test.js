import React from 'react'
import { render } from '@testing-library/react'
import WaterQuality from '../../pages/water-quality'

describe('Water Quality page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<WaterQuality />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
