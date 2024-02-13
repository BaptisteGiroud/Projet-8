import { Link, useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import '../../styles/header.scss'
import logoHeader from '../../assets/logo_header.svg'

function Header() {
  let location = useLocation()
  let [activePage, setActivePage] = useState(location.pathname)

  let checkActivePage = (page) => {
    setActivePage(page)
  }

  return (
    <div className="header">
      <img src={logoHeader} alt="Logo Kasa"></img>
      <nav className="header__nav">
        <h3 className={activePage === '/' ? 'active' : ''}>
          <Link to="/" onClick={() => checkActivePage('/')}>
            Accueil
          </Link>
        </h3>
        <h3 className={activePage === '/apropos' ? 'active' : ''}>
          <Link to="/apropos" onClick={() => checkActivePage('/apropos')}>
            À propos
          </Link>
        </h3>
      </nav>
    </div>
  )
}

export default Header
