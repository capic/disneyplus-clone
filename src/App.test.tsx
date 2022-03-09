import React from 'react'
import App from './App'
import { render, screen, within } from '@testing-library/react'
import exp from 'constants'

describe('rendering', () => {
  it('renders the login page if not logon', () => {
    render(<App />)
    expect(screen.getByRole('region', { name: 'login' })).toBeInTheDocument()
  })

  it('renders a navbar', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })


})
