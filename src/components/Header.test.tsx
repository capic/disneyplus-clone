import { render, screen, within } from '@testing-library/react'
import Header from './Header'
import React from 'react'

describe('rendering', () => {
  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByAltText(/disney+/i)).toBeInTheDocument()
  })
  it('renders all links', () => {
    const expectedLinks = [
      { name: 'home', link: '/home', img: '/images/home-icon.svg' },
      { name: 'search', link: '/search', img: '/images/search-icon.svg' },
      { name: 'watchlist', link: '/watchlist', img: '/images/watchlist-icon.svg' },
      { name: 'originals', link: '/originals', img: '/images/original-icon.svg' },
      { name: 'movies', link: '/movies', img: '/images/movie-icon.svg' },
      { name: 'series', link: '/series', img: '/images/series-icon.svg' },
    ]
    render(<Header />)
    const menu = within(screen.getByRole('navigation')).getByRole("menu")

    expect(within(menu).getAllByRole('link')).toHaveLength(expectedLinks.length)
    within(menu)
      .getAllByRole('link')
      .forEach((link: HTMLElement, index: number) => {
        expect(link).toHaveAttribute('href', expectedLinks[index].link)
        expect(within(link).getByRole('img')).toHaveAttribute('src', expectedLinks[index].img || null)
        expect(link).toHaveTextContent(new RegExp(expectedLinks[index].name, 'i'))
      })
  })

  it('renders a login button', () => {
    render(<Header />)
    expect(screen.getByRole('button', {name: 'login'})).toBeInTheDocument()
  })
})