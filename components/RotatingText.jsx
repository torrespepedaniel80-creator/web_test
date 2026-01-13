'use client';
import { useState, useEffect } from 'react';

export default function RotatingText({ words, interval = 3000, className = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 400); // Tiempo para fade out
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 600); // Tiempo para fade in
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={`inline-block relative ${className}`}>
      <span
        key={currentIndex}
        className={`inline-block transition-all duration-500 transform ${
          isAnimating
            ? 'opacity-0 blur-sm -translate-y-2 scale-95'
            : 'opacity-100 blur-0 translate-y-0 scale-100'
        }`}
        style={{
          animation: isAnimating ? 'none' : 'fadeInUp 0.6s ease-out'
        }}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
}
