'use client';

import { ReactNode } from 'react';

export function AnimatedBorderCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated border gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary-hover to-primary rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-[borderGlow_3s_ease-in-out_infinite]" />

      {/* Card content */}
      <div className="relative bg-surface border border-border rounded-2xl hover:border-primary/50 transition-all duration-300">
        {children}
      </div>
    </div>
  );
}
