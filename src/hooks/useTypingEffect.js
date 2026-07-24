import { useEffect, useState } from "react";

export default function useTypingEffect(phrases, pause = 1400) {
  const [text, setText] = useState("");

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    function tick() {
      const current = phrases[phraseIndex];

      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, pause);
          return;
        }
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }

      timeoutId = setTimeout(tick, deleting ? 40 : 75);
    }

    tick();
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}
