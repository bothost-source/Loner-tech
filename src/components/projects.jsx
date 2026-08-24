import useReveal from '../useReveal';
import './Projects.css';

const PROJECTS = [
  {
    title: 'omni ai Bot',
    desc: 'AI-powered WhatsApp & Telegram bot with natural language processing, automated responses, and multi-user support.',
    tags: ['JavaScript', 'Python', 'Node.js'],
    live: '#',
    source: '#',
    color: '#4f46e5',
  },
  {
    title: 'Loner Tech Portfolio',
    desc: 'Personal portfolio site with dark/light mode, custom cursor, scroll animations, and responsive design.',
    tags: ['React', 'CSS3', 'Vite'],
    live: 'https://loner-tech.onrender.com',
    source: '#',
    color: '#0b0b0c',
  },
  {
    title: 'AURA CHAT',
    desc: 'Cross-platform mobile application built with Dart/Flutter for business automation and workflow management.',
    tags: ['Dart', 'Flutter', 'Firebase'],
    live: '#',
    source: '#',
    color: '#059669',
  },
  {
    title: 'Vortyx Pulse ',
    desc: 'A new ai api with multiple endpoints',
    tags: ['Python'],
    live: '',
    source: '#',
    color: '#dc2626',
  },
];

export default function Projects() {
  const [ref, inView] = useReveal();

  return (
    <section className={`section-pad reveal ${inView ? 'in' : ''}`} id="projects" ref={ref}>
      <div className="kicker">Work</div>
      <div className="section-head">
        <h2>Selected projects.</h2>
        <p>A few things built end-to-end — from concept to deployment.</p>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-card__top" style={{ '--accent': p.color }}>
              <div className="project-card__dots">
                <span /><span /><span />
              </div>
              <div className="project-card__tags">
                {p.tags.map(t => <span key={t} className="project-card__tag mono">{t}</span>)}
              </div>
            </div>
            <h3 className="project-card__title">{p.title}</h3>
            <p className="project-card__desc">{p.desc}</p>
            <div className="project-card__links">
              <a href={p.live} target="_blank" rel="noreferrer" className="project-card__link">
                Live Demo →
              </a>
              <a href={p.source} target="_blank" rel="noreferrer" className="project-card__link project-card__link--ghost">
                Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
