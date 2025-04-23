// ✅ 2. Throttling in React (e.g. Scroll listener)
// 🧠 Use Case:
// Handle scroll event only once per second — useful for showing back-to-top button, updating UI, etc.

// 🔧 Code:

import React, { useEffect, useState } from 'react';

function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

export default function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
      console.log('Scroll position:', window.scrollY);
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ height: '1500px', padding: '20px' }}>
      <h2>Scroll Position: {scrollY}px</h2>
      <p>Scroll to see throttling in action!</p>
    </div>
  );
}
