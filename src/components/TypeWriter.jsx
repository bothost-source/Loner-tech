import { useState, useEffect } from 'react';

const ROLES = [
  'Full-Stack Developer',
  'Web · Mobile · Telegram & WhatsApp Bots',
  'Building complete systems, solo',
];

export default function TypeWriter() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(80);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.slice(0, text.length + 1));
        setSpeed(80);
        if (text === currentRole) {
          setSpeed(2000); // pause at full text
          setIsDeleting(true);
        }
      } else {
        setText(currentRole.slice(0, text.length - 1));
        setSpeed(40);
        if (text === '') {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % ROLES.length);
          setSpeed(500);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, speed]);

  return (
    <span className="hero__sub">
      {text}
      <span className="type-cursor">|</span>
    </span>
  );
}
