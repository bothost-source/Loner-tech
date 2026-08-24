import { useState } from 'react';
import useReveal from '../useReveal';
import './Contact.css';

export default function Contact() {
  const [ref, inView] = useReveal();
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.type) e.type = 'Select a project type';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    // Here you'd normally send to a backend
    setToast('Message sent! I\'ll get back to you soon.');
    setForm({ name: '', email: '', type: '', message: '' });
    setTimeout(() => setToast(''), 4000);
  };

  const handleChange = (field) => (ev) => {
    setForm(f => ({ ...f, [field]: ev.target.value }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: '' }));
  };

  return (
    <section className={`contact reveal ${inView ? 'in' : ''}`} id="contact" ref={ref}>
      <h2 className="contact__title">Have something to build?</h2>
      <p className="contact__sub">Reach out directly — Telegram is fastest, email works too. Or fill the form below.</p>

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

      <form className="contact__form" onSubmit={handleSubmit} noValidate>
        <div className="contact__form-row">
          <div className="contact__field">
            <input
              type="text"
              placeholder="Your name"
              className={`form-input ${errors.name ? 'error' : ''}`}
              value={form.name}
              onChange={handleChange('name')}
            />
            {errors.name && <span className="contact__error">{errors.name}</span>}
          </div>
          <div className="contact__field">
            <input
              type="email"
              placeholder="your@email.com"
              className={`form-input ${errors.email ? 'error' : ''}`}
              value={form.email}
              onChange={handleChange('email')}
            />
            {errors.email && <span className="contact__error">{errors.email}</span>}
          </div>
        </div>
        <div className="contact__field">
          <select
            className={`form-input ${errors.type ? 'error' : ''}`}
            value={form.type}
            onChange={handleChange('type')}
          >
            <option value="">Project type</option>
            <option value="website">Website</option>
            <option value="mobile">Mobile App</option>
            <option value="telegram">Telegram Bot</option>
            <option value="whatsapp">WhatsApp Bot</option>
            <option value="other">Something else</option>
          </select>
          {errors.type && <span className="contact__error">{errors.type}</span>}
        </div>
        <div className="contact__field">
          <textarea
            placeholder="Tell me about your project..."
            rows="4"
            className={`form-input ${errors.message ? 'error' : ''}`}
            value={form.message}
            onChange={handleChange('message')}
          />
          {errors.message && <span className="contact__error">{errors.message}</span>}
        </div>
        <button type="submit" className="btn btn-solid contact__submit">Send message</button>
      </form>

      <div className={`toast ${toast ? 'show' : ''}`}>{toast}</div>
    </section>
  );
}
