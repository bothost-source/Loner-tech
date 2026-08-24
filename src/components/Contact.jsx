import useReveal from '../useReveal';
import './Contact.css';

export default function Contact() {
  const [ref, inView] = useReveal();
  return (
    <section className={`contact reveal ${inView ? 'in' : ''}`} id="contact" ref={ref}>
      <h2 className="contact__title">Have something to build?</h2>
      <p className="contact__sub">Reach out directly — Telegram is fastest, email works too.</p>
      <div className="contact__methods">
        <a href="https://t.me/LORDTARRIFIC" target="_blank" rel="noreferrer" className="contact-card">
          <div className="contact-card__icon">✈</div>
          <div>
            <div className="contact-card__label mono">Telegram</div>
            <div className="contact-card__value">@LORDTARRIFIC</div>
          </div>
        </a>
        <a href="mailto:supportaurachat@gmail.com" className="contact-card">
          <div className="contact-card__icon">✉</div>
          <div>
            <div className="contact-card__label mono">Email</div>
            <div className="contact-card__value">supportaurachat@gmail.com</div>
          </div>
        </a>
      </div>
    </section>
  );
}
