import { useState } from 'react'
import './Header.css'
import teddyLogo from '../../public/logo.png'
import Sidebar from './Sidebar'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  // Detecta o pathname atual
  const pathname = window.location.pathname

  const toggleSidebar = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <>

      <header className="header">
        <button className="menu-button" onClick={toggleSidebar}>
          ☰
        </button>
        <img src={teddyLogo} alt="Logo Teddy" className="header-logo" />
        <nav className="header-tabs">
          <ul>
            <li>
              <a
                href="/clientes"
                className={pathname === '/clientes' ? 'active' : ''}
              >
                Clientes
              </a>
            </li>
            <li>
              <a
                href="/selecionados"
                className={pathname === '/selecionados' ? 'active' : ''}
              >
                Clientes Selecionados
              </a>
            </li>
            <li>
              <a
                href="/"
                className={pathname === '/' ? 'active' : ''}
              >
                Sair
              </a>
            </li>
          </ul>
        </nav>
        <span className="header-username">
          Olá, <b>{localStorage.getItem('username') || 'Usuário'}</b>!
        </span>
      </header>

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  )
}

export default Header
