import React from 'react'

import { render, screen } from '@testing-library/react'

import Copyright from '../Copyright'

describe('<Copyright />', () => {
  it('should render correctly', () => {
    render(<Copyright />)
    expect(screen.getByText(/made with ♥/i)).toBeInTheDocument()
  })
})
