import React from 'react'
import { render } from '@testing-library/react'
import Guide from '../../pages/guide'

describe('Gude page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Guide />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
