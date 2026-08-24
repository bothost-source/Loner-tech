import TypeWriter from './TypeWriter';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__image-wrap">
        <img
          className="hero__image"
          src="https://images.unsplash.com/photo-1653549892896-dde02867edee?fm=jpg&q=80&w=1600&auto=format&fit=crop"
          alt="Abstract white 3D render on black background"
        />
      </div>

      <div className="hero__content">
        <div className="hero__eyebrow"><span className="hero__dot" /> AVAILABLE FOR WORK</div>
        <h1 className="hero__title">LONER TECH</h1>
        <div className="hero__sub-wrap">
          <TypeWriter />
        </div>
        <div className="hero__cta">
          <a href="#contact" className="btn btn-solid">Get in touch</a>
          <a href="#services" className="btn btn-ghost" style={{ border: '1px solid var(--line-bright)' }}>What I build</a>
        </div>
      </div>
    </section>
  );
}
