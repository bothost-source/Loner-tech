import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <div className="header__mark" />
        <span>LONER TECH</span>
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      <div className="header__cta">
        <a href="mailto:supportaurachat@gmail.com" className="btn btn-ghost">Email</a>
        <a href="#contact" className="btn btn-solid">Contact</a>
      </div>
    </header>
  );
}
