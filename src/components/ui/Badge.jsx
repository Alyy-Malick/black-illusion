import React from 'react';
import { cn } from '@/utils/cn';

const Badge = ({ 
  children, 
  className, 
  variant = 'outline',
  ...props 
}) => {
  const variants = {
    solid: 'bg-white text-black',
    outline: 'bg-transparent text-white border border-white/20',
    muted: 'bg-surface-elevated text-muted-foreground',
  };

  return (
    <span 
      className={cn(
        'inline-block px-2 py-0.5 text-[9px] font-medium tracking-widest uppercase',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
