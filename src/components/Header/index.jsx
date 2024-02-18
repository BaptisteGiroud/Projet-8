import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import '../../styles/header.scss'
import logoHeader from '../../assets/logo_header.svg'
import logoHeaderMobile from '../../assets/logo_header_mobile.svg'

/** Responsive */

function Responsive() {
  const [logokasa, setLogokasa] = useState(null)

  useEffect(() => {
    const sizeLogo = () => {
      if (window.innerWidth >= 768) {
        setLogokasa(logoHeader)
      } else {
        setLogokasa(logoHeaderMobile)
      }
    }

    sizeLogo()
    window.addEventListener('load', sizeLogo)
    window.addEventListener('resize', sizeLogo)
    return () => {
      window.removeEventListener('load', sizeLogo)
      window.removeEventListener('resize', sizeLogo)
    }
  }, [])
  return logokasa
}

/** Main */

function Header() {
  let location = useLocation()
  let [activePage, setActivePage] = useState(location.pathname)

  let checkActivePage = (page) => {
    setActivePage(page)
  }

  let logokasa = Responsive()

  return (
    <div className="header">
      <img src={logokasa} alt="Logo Kasa"></img>
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
