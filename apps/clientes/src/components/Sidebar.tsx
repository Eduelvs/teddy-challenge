import './Sidebar.css'

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const pathname = window.location.pathname
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <button className="close-button" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="100%"
            height="100%"
            fill="none"
          >
            <circle cx="12" cy="12" r="11" fill="black" />
            <path
            className='close-icon'
              d="M14 8L10 12L14 16"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      <nav>
        <ul>
          <li>
            <a
              href="/"
              className={pathname === '/' ? 'active' : ''}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', position: 'relative' }}
            >
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495ZM12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V15C11.25 14.5858 11.5858 14.25 12 14.25C12.4142 14.25 12.75 14.5858 12.75 15V18C12.75 18.4142 12.4142 18.75 12 18.75Z" fill="#000000"></path> </g></svg>
              Home
              {pathname === '/' && <div className="sidebar-active-bar" />}
            </a>
          </li>
          <li>
            <a
              href="/clientes"
              className={pathname === '/clientes' ? 'active' : ''}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', position: 'relative' }}
            >
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#292D32"></path> <path d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z" fill="#292D32"></path> </g></svg>
              Clientes
              {pathname === '/clientes' && <div className="sidebar-active-bar" />}
            </a>
          </li>
          <li>
            <a
              href="/selecionados"
              className={pathname === '/selecionados' ? 'active' : ''}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', position: 'relative' }}
            >
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.0002 14C6.99016 14 2.91016 17.36 2.91016 21.5C2.91016 21.78 3.13016 22 3.41016 22H20.5902C20.8702 22 21.0902 21.78 21.0902 21.5C21.0902 17.36 17.0102 14 12.0002 14Z" fill="#292D32"></path> <path d="M12 2C10.82 2 9.74 2.41 8.88 3.1C7.73 4.01 7 5.42 7 7C7 7.94 7.26 8.82 7.73 9.57C8.59 11.02 10.17 12 12 12C13.26 12 14.41 11.54 15.29 10.75C15.68 10.42 16.02 10.02 16.28 9.57C16.74 8.82 17 7.94 17 7C17 4.24 14.76 2 12 2ZM14.59 6.46L11.92 8.92C11.74 9.09 11.51 9.17 11.28 9.17C11.04 9.17 10.8 9.08 10.62 8.9L9.39 7.66C9.02 7.29 9.02 6.7 9.39 6.33C9.76 5.96 10.35 5.96 10.72 6.33L11.31 6.92L13.32 5.07C13.7 4.72 14.29 4.74 14.64 5.12C14.99 5.51 14.97 6.11 14.59 6.46Z" fill="#292D32"></path> </g></svg>
              Clientes Selecionados
              {pathname === '/selecionados' && <div className="sidebar-active-bar" />}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
