import useReveal from '../useReveal';
import './Services.css';

const SERVICES = [
  { idx: '01 / WEB', title: 'Website development', body: 'Personal sites and full business platforms — designed, built, and deployed from scratch.' },
  { idx: '02 / MOBILE', title: 'Mobile applications', body: 'Cross-platform apps built with Dart, shipping to both iOS and Android from one codebase.' },
  { idx: '03 / TELEGRAM', title: 'Telegram bots', body: 'Custom bots for automation, support, commerce, or community management inside Telegram.' },
  { idx: '04 / WHATSAPP', title: 'WhatsApp bots', body: 'Automated WhatsApp flows for customer support, orders, or notifications.' },
];

export default function Services() {
  const [ref, inView] = useReveal();
  return (
    <section className={`section-pad reveal ${inView ? 'in' : ''}`} id="services" ref={ref}>
      <div className="kicker">What I build</div>
      <div className="section-head">
        <h2>Four kinds of work, one developer.</h2>
        <p>From a personal site to a business platform, a mobile app, or a bot that runs your Telegram or WhatsApp — built end to end.</p>
      </div>
      <div className="services-grid">
        {SERVICES.map((s) => (
          <div className="service-card" key={s.idx}>
            <span className="service-card__idx mono">{s.idx}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
