import React, { useEffect, useState } from 'react';

const RgbLine = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((offset) => (offset < 100 ? offset + 1 : 0));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="rgbGradient">
          <stop offset="0%" stopColor="red" />
          <stop offset="33%" stopColor="green" />
          <stop offset="66%" stopColor="blue" />
          <stop offset="100%" stopColor="red" />
        </linearGradient>
        <mask id="lineMask">
          <rect width="100%" height="100%" fill="white" />
          <rect x={`${offset}%`} width="10%" height="100%" fill="black" />
        </mask>
        <filter id="glow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feComponentTransfer>
            <feFuncR type="linear" slope="5" intercept="0.5" />
            <feFuncG type="linear" slope="5" intercept="0.5" />
            <feFuncB type="linear" slope="5" intercept="0.5" />
            <feFuncA type="linear" slope="0" intercept="1" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#rgbGradient)"
        mask="url(#lineMask)"
        filter="url(#glow)"
      />
    </svg>
  );
};

export default RgbLine;
