import { useState, useEffect } from 'react';

const TypingEffect = () => {
  const texts = ["UI / UX DESIGNER", "WEB DESIGNER", "WEB DEVELOPER"]; // Array of texts to display
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0); // Index for character of current text
  const [textIndex, setTextIndex] = useState(0); // Index to track which phrase to type
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Speed of typing (milliseconds)
  const deletingSpeed = 50; // Speed of deleting

  useEffect(() => {
    let timeoutId;

    const currentText = texts[textIndex];

    if (!isDeleting && index < currentText.length) {
      // Typing the text forward
      timeoutId = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      // Deleting the text backward
      timeoutId = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (index === currentText.length) {
      // Pause before starting to delete
      setTimeout(() => setIsDeleting(true), 1000); // 1 second pause before deleting
    } else if (isDeleting && index === 0) {
      // Move to the next text after deletion
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length); // Loop back to the first text
    }

    return () => clearTimeout(timeoutId);
  }, [index, isDeleting, textIndex, texts]);

  return <span>{displayText}</span>;
};

export default TypingEffect;
