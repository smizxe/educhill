import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Since I haven't set up Tailwind properly (using vanilla CSS primarily but clsx/tailwind-merge for class manipulation is handy if I were using Tailwind, 
// strictly speaking I'm using vanilla CSS modules/global CSS, but I'll stick to simple className concatenation for now to avoid confusion 
// if I didn't actually setup Tailwind - I only installed dependencies but didn't run init. Cleanest to just use inline styles or standard classes.)

// Actually, I'll use standard CSS classes defined in index.css (or a specific css file).
// I'll add button styles to index.css or use inline styles for dynamic stuff.
// For now, I'll rely on global classes + style objects.

const variants = {
  primary: {
    backgroundColor: 'var(--color-primary)',
    color: '#fff',
    border: '1px solid var(--color-primary)',
  },
  outline: {
    backgroundColor: 'transparent',
    color: 'var(--color-text-primary)',
    border: '1px solid var(--color-border)',
  },
  ghost: {
    backgroundColor: 'transparent',
    color: 'var(--color-text-secondary)',
    border: 'none',
  }
};

const sizes = {
  sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
  md: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
  lg: { padding: '1rem 2rem', fontSize: '1.125rem' },
};

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    borderRadius: 'var(--radius-full)',
    fontWeight: 500,
    transition: 'all 0.2s',
    cursor: 'pointer',
    ...variants[variant],
    ...sizes[size],
  };

  return (
    <button 
      style={baseStyle} 
      className={className}
      {...props}
      onMouseEnter={(e) => {
        if (variant === 'primary') e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
        if (variant === 'outline') e.currentTarget.style.borderColor = '#cbd5e1';
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') e.currentTarget.style.backgroundColor = 'var(--color-primary)';
        if (variant === 'outline') e.currentTarget.style.borderColor = 'var(--color-border)';
      }}
    >
      {children}
    </button>
  );
};
