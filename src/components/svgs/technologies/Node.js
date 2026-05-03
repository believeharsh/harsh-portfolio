import React from 'react';

export default function AnimatedNodeIcon({ size = 128, className = '' }) {
  // We use the exact same paths as the original, but we break them up
  // to allow for individual gradient fills and a different layering structure.

  // Define our custom styling here as an inner class for portability.
  // This animation is different: it's not a simple spin; it's a "magnetic" float.
  const styleBlock = `
    .node-icon {
      overflow: visible;
      transform-origin: center center;
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .node-icon:hover {
      transform: scale(1.1) translateY(-5px);
    }

    /* Target individual path segments for a dynamic effect */
    .node-icon path {
      transition: opacity 0.3s ease;
    }

    .node-icon:hover path {
      opacity: 0.9; /* Subtle glow effect on hover */
    }

    /* Keyframe animation for a constant subtle float, even when not hovering */
    @keyframes subtleFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-3px); }
    }
    
    .node-icon-float {
      animation: subtleFloat 4s ease-in-out infinite;
    }
  `;

  return (
    <div
      style={{ display: 'inline-block', position: 'relative' }}
      className={className}
    >
      <style>{styleBlock}</style>
      <svg
        viewBox="0 0 128 128"
        width={size}
        height={size}
        className="node-icon node-icon-float"
        aria-label="Node.js Logo"
        role="img"
      >
        <defs>
          {/* Custom Multi-tone Gradients - Key for the new look */}
          <linearGradient id="gradientTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#83cd29" />{' '}
            {/* Brighter, fresher green */}
            <stop offset="100%" stopColor="#6aa63a" />{' '}
            {/* Deep, rich Node green */}
          </linearGradient>

          <linearGradient
            id="gradientBottom"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#6cc24a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#43853d" stopOpacity="0.9" />
          </linearGradient>

          {/* Subtle drop shadow just for the icon itself */}
          <filter id="iconShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="2"
              floodColor="rgba(0,0,0,0.1)"
            />
          </filter>
        </defs>

        <g filter="url(#iconShadow)">
          {/* We simplify and color-code the paths differently than the original */}

          {/* Main central hex (Top Half) */}
          <path
            fill="url(#gradientTop)"
            d="M64 0a5.617 5.617 0 0 0-2.789.744L11.445 29.646l18 32.9L64.6 1a8 8 0 0 0-.6-.1Zm48.7 30L91.38 15.024 66.7.754a2.7 2.7 0 0 0-.378-.15A2 2 0 0 1 66.3.6L102.5 61.2 118 32.7a5.5 5.5 0 0 0-1-1.2Z"
          ></path>

          {/* Side accents and Bottom Half */}
          <path
            fill="url(#gradientBottom)"
            d="M29.417 62.616l35.579 65.278c.1-.02.198-.023.297-.05l35.653-65.624L65 0ZM10.586 30.176c-1.502 1.031-2.35 2.752-2.35 4.595v58.478c0 .93.254 1.838.684 2.645l19.34-33.293Zm108.161 1.4-16.643 30.629 17.66 30.398V34.77c0-1.15-.382-2.265-1.017-3.195zm-17.204 31.667-34.808 64.062.055-.028 50.243-29.183.004-.002c1.402-.793 2.3-2.155 2.604-3.693zm-72.718.394L9.545 96.832c.406.5.885.936 1.43 1.266l.001.004 49.702 28.866.53.305h.01c.257.151.528.266.798.372.144.054.288.104.433.146a2 2 0 0 0 .376.089 2.5 2.5 0 0 0 .727.108c.118.01.237.01.355.01z"
          ></path>
        </g>
      </svg>
    </div>
  );
}
