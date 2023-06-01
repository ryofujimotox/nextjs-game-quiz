'use client';
import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  typingSpeed: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, typingSpeed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, typingSpeed);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [text, typingSpeed, index, displayedText]);

  return <p>{displayedText}</p>;
};

export default TypingAnimation;
