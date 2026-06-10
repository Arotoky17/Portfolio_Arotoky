import { useState, useEffect } from 'react';

/**
 * Typewriter hook that cycles through an array of strings,
 * typing and then deleting each one.
 */
export const useTypewriter = (
  texts,
  typingSpeed  = 80,
  deletingSpeed = 45,
  pauseTime    = 2000,
) => {
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase]             = useState('typing'); // 'typing' | 'deleting'
  const [textIndex, setTextIndex]     = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (phase === 'typing') {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(
          () => setDisplayText(currentText.slice(0, displayText.length + 1)),
          typingSpeed,
        );
      } else {
        timeout = setTimeout(() => setPhase('deleting'), pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(
          () => setDisplayText(displayText.slice(0, -1)),
          deletingSpeed,
        );
      } else {
        setTextIndex((prev) => (prev + 1) % texts.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};
