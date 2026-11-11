import { useState, useEffect } from 'react';

/**
 * Animates a number from 0 to the target value.
 * Returns a formatted string with locale separators.
 */
export default function useCountUp(target: number, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / duration, 1);
      setValue(Math.floor(target * progressRatio));
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
    return () => {
      // cleanup not strictly needed for requestAnimationFrame but safe.
    };
  }, [target, duration]);

  return value.toLocaleString();
}
