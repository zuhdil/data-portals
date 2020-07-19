import React from 'react'
import { render } from '@testing-library/react'
import Hygiene from '../../pages/hygiene'

describe('Hygiene page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Hygiene />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
