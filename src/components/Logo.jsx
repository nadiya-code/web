import React from 'react';

function Logo({ className = "h-10" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        <rect width="40" height="40" rx="10" fill="hsl(var(--primary))" />
        <path d="M20 10L10 16L20 22L30 16L20 10Z" fill="hsl(var(--accent))" />
        <path d="M10 22L20 28L30 22" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 28L20 34L30 28" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
        EduNova
      </span>
    </div>
  );
}

export default Logo;