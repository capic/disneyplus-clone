import { render, screen } from '@testing-library/react'
import Login from './Login'

describe('rendering', () => {
  it('renders a button', () => {
    render(<Login />)

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveTextContent(/get all there/i)
  })

  it('renders a description', () => {
    render(<Login />)

    expect(screen.getByRole('paragraph')).toBeInTheDocument()
  })

  it('renders a first logo', () => {
    render(<Login />)

    expect(screen.getByAltText('logo 1')).toBeInTheDocument()
    expect(screen.getByAltText('logo 1')).toHaveAttribute('src', '/images/cta-logo-one.svg')
  })

  it('renders a second logo', () => {
    render(<Login />)

    expect(screen.getByAltText('logo 2')).toBeInTheDocument()
    expect(screen.getByAltText('logo 2')).toHaveAttribute('src', '/images/cta-logo-two.png')
  })
})