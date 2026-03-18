import { useState } from 'react'
import logo from '../assets/logo.svg'
import './Navbar.css'

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand" href="#top" aria-label="Go to homepage">
          <img className="brand-logo" src={logo} alt="CranioBalance logo" />
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#therapy">Körper & Geist</a>
          <a href="#about">Ganzheitliches Wohlbefinden</a>
          <a href="#experience">Craniosacral-Praktikerin</a>
          <a href="#experience">Erfahrungsberichte</a>
          <a href="#faq">Kosten & FAQ</a>
        </nav>

        <a className="nav-cta" href="#booking">
          Termin buchen
        </a>

        {/* Hamburger Menu Button - visible on mobile */}
        <button 
          className="hamburger-btn" 
          onClick={toggleSidebar} 
          aria-label="Toggle menu"
          aria-expanded={sidebarOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Sidebar Overlay */}
      <div 
        className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} 
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="sidebar-close" onClick={closeSidebar} aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <nav className="sidebar-nav" aria-label="Mobile navigation">
          <a href="#home" onClick={closeSidebar}>Home</a>
          <a href="#therapy" onClick={closeSidebar}>Körper & Geist</a>
          <a href="#about" onClick={closeSidebar}>Ganzheitliches Wohlbefinden</a>
          <a href="#experience" onClick={closeSidebar}>Craniosacral-Praktikerin</a>
          <a href="#experience" onClick={closeSidebar}>Erfahrungsberichte</a>
          <a href="#faq" onClick={closeSidebar}>Kosten & FAQ</a>
          <a href="#booking" className="sidebar-cta" onClick={closeSidebar}>Termin buchen</a>
        </nav>
      </aside>
    </header>
  )
}

export default Navbar
