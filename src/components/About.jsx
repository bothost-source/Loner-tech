import useReveal from '../useReveal';
import './About.css';

export default function About() {
  const [ref, inView] = useReveal();
  return (
    <section className={`section-pad reveal ${inView ? 'in' : ''}`} id="about" ref={ref}>
      <div className="about">
        <div>
          <div className="kicker">About</div>
          <h2 className="about__title">Working solo,<br />building complete systems.</h2>
        </div>
        <div className="about__body">
          <p>LONER TECH is a full-stack developer working across web, mobile, and messaging automation. The focus is website development for both individuals and businesses, cross-platform mobile applications, and custom bots for Telegram and WhatsApp.</p>
          <p>The stack is HTML, JavaScript, Python, and Dart — covering everything from a frontend interface to the backend logic and automation running behind it, without needing to hand a project off between specialists.</p>
        </div>
      </div>
    </section>
  );
}
