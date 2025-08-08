import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import SuccessPopup from '../components/SuccessPopup'

describe('SuccessPopup', () => {
  it('renderiza a mensagem quando show é true', () => {
    render(<SuccessPopup show={true} onClose={vi.fn()} />)
    expect(screen.getByText('Cliente criado com sucesso!')).toBeTruthy()
  })

  it('não renderiza nada quando show é false', () => {
    const { container } = render(<SuccessPopup show={false} onClose={vi.fn()} />)
    expect(container.firstChild).toBeNull()
  })
})
