"use client";
import React, { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string;
  typingSpeed: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  typingSpeed,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [text, typingSpeed, index]);

  return <p>{displayedText}</p>;
};

export default TypingAnimation;
