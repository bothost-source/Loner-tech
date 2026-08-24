import useReveal from '../useReveal';
import './Skills.css';

const SKILLS = [
  { glyph: '<>', name: 'HTML', role: 'Markup · page structure' },
  { glyph: 'JS', name: 'JavaScript', role: 'Web apps · bots · backend' },
  { glyph: 'Py', name: 'Python', role: 'Bots · automation · backend' },
  { glyph: 'Dt', name: 'Dart', role: 'Cross-platform mobile apps' },
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
            <div>
              <div className="skill-chip__name">{s.name}</div>
              <div className="skill-chip__role mono">{s.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
