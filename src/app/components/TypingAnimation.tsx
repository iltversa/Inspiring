"use client";

import { useState, useEffect } from "react";

interface TypingAnimationProps {
  phrases: string[];
  speed?: number;
  pauseDuration?: number;
}

export default function TypingAnimation({
  phrases,
  speed = 80,
  pauseDuration = 4000,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const currentPhrase = phrases[currentPhraseIndex];

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing and deleting logic
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isTyping) {
      // Typing phase
      if (displayedText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        // Finished typing, wait before deleting
        timer = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, speed / 2);
      } else {
        // Move to next phrase
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isTyping, currentPhrase, currentPhraseIndex, speed, pauseDuration, phrases.length]);

  return (
    <span className="inline-flex items-baseline gap-0">
      <span className="text-red-600">{displayedText}</span>
      <span
        className={`ml-1 inline-block w-[3px] h-[1.2em] bg-red-600 ${
          showCursor ? "opacity-100" : "opacity-0"
        } transition-opacity duration-100`}
      />
    </span>
  );
}
