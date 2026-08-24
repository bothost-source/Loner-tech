import useReveal from '../useReveal';
import './Skills.css';

const SKILLS = [
  { glyph: '<>', name: 'HTML', role: 'Markup · page structure', level: 95 },
  { glyph: 'JS', name: 'JavaScript', role: 'Web apps · bots · backend', level: 90 },
  { glyph: 'Py', name: 'Python', role: 'Bots · automation · backend', level: 88 },
  { glyph: 'Dt', name: 'Dart', role: 'Cross-platform mobile apps', level: 82 },
];

export default function Skills() {
  const [ref, inView] = useReveal();
  return (
    <section className={`section-pad reveal ${inView ? 'in' : ''}`} id="skills" ref={ref}>
      <div className="kicker">Stack</div>
      <div className="section-head">
        <h2>Languages I build with</h2>
        <p>The core toolkit behind every site, app, and bot — covering markup, web logic, automation, and native mobile without switching ecosystems.</p>
      </div>
      <div className="skills-row">
        {SKILLS.map((s) => (
          <div className="skill-chip" key={s.name}>
            <div className="skill-chip__glyph mono">{s.glyph}</div>
            <div className="skill-chip__info">
              <div className="skill-chip__name">{s.name}</div>
              <div className="skill-chip__role mono">{s.role}</div>
              <div className="skill-chip__bar-wrap">
                <div
                  className={`skill-chip__bar ${inView ? 'animate' : ''}`}
                  style={{ '--level': `${s.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
