import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Work' },
    { href: '#about', label: 'About' },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__brand">
        <div className="header__mark" />
        <span>LONER TECH</span>
      </div>

      <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header__actions">
        <ThemeToggle />
        <a href="mailto:supportaurachat@gmail.com" className="btn btn-ghost header__email">Email</a>
        <a href="#contact" className="btn btn-solid">Contact</a>
        <button
          className={`header__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
