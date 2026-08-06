import React from 'react';

export default function CanvasBackground({ theme }) {
  const isDark = theme === 'dark';

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Top Right Warm Glow (Matching Sample Screenshot) */}
      <div
        className="animate-pulse-slow"
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(240, 90, 40, 0.22) 0%, rgba(255, 125, 82, 0.05) 60%, transparent 80%)'
            : 'radial-gradient(circle, rgba(240, 90, 40, 0.16) 0%, rgba(255, 160, 120, 0.08) 60%, transparent 80%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Bottom Left Soft Glow */}
      <div
        className="animate-pulse-slow"
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(255, 125, 82, 0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(240, 90, 40, 0.12) 0%, rgba(255, 200, 170, 0.06) 60%, transparent 80%)',
          filter: 'blur(100px)',
          animationDelay: '4s',
        }}
      />
    </div>
  );
}
