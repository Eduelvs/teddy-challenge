import { useState } from 'react'
import './Header.css'
import teddyLogo from '../../public/logo.png'
import Sidebar from './Sidebar'

const HeaderWithSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

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
            <li><a href="#">Clientes</a></li>
            <li><a href="#">Clientes Selecionados</a></li>
            <li><a href="#">Sair</a></li>
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

export default HeaderWithSidebar
