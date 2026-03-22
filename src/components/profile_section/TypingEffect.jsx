import { useState, useEffect } from "react";

const TypingEffect = () => {
  const words = ["Programmer","Software Developer", "Designer", "Web Developer"];
  const typingSpeed = 150; // ms per character
  const erasingSpeed = 100;
  const delayBetweenWords = 1000;

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && charIndex < words[wordIndex].length) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setDisplayedText(words[wordIndex].substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, erasingSpeed);
    } else if (!isDeleting && charIndex === words[wordIndex].length) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <span className="border-r-4 border-black pr-1">{displayedText}</span>
  );
};

export default TypingEffect;