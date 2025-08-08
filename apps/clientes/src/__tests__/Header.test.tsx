import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

describe('Header component minimal test', () => {
  it('should render the logo', () => {
    render(<Header />)
    const logo = screen.getByAltText('Logo Teddy')
    expect(logo).not.toBeNull()
  })
})