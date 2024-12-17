import React, { useEffect, useState } from 'react';
// Remove the global CSS import
// import './Typewriter.css'; // Import CSS for bounce animation

const Typewriter = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [highlighting, setHighlighting] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(text.length);

  useEffect(() => {
    let timeout;
    if (!highlighting) {
      if (index < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex(index + 1);
        }, 100);
      } else {
        setTimeout(() => setHighlighting(true), 500);
      }
    } else {
      if (highlightIndex > 0) { // Change condition to include the first character
        timeout = setTimeout(() => {
          setHighlightIndex(highlightIndex - 1);
        }, 75);
      } else {
        setTimeout(() => {
          setHighlighting(false);
          setIndex(0); // Change index to 0 to include the first character
          setHighlightIndex(text.length);
          setDisplayedText(''); // Clear displayed text completely
        }, 75);
      }
    }
    return () => clearTimeout(timeout);
  }, [index, highlighting, highlightIndex, text]);

  return (
    <div className={`min-h-8 ${className}`}>
      <span>
        {displayedText.split('').map((char, i) => (
          <span
            key={i}
            className={highlighting && i >= highlightIndex ? ' bg-indigo-500 opacity-60 text-white' : 'inline-block indent-px'}
          >
            {char === ' ' ? '\u00A0' : char} 
          </span>
        ))}
      </span>
    </div>
  );
};

export default Typewriter;
