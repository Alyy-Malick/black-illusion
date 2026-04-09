import React from 'react';
import { cn } from '@/utils/cn';

const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  as: Component = 'button',
  ...props 
}, ref) => {
  const variants = {
    primary: 'bg-white text-black border border-white hover:bg-transparent hover:text-white',
    secondary: 'bg-transparent text-white border border-white hover:bg-white hover:text-black',
    ghost: 'bg-transparent text-white border border-transparent hover:border-white/20 hover:bg-white/5',
    outline: 'bg-transparent text-white border border-white/20 hover:border-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-8 py-3 text-xs',
    lg: 'px-12 py-4 text-sm',
    icon: 'p-2',
  };

  return (
    <Component
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center font-bold tracking-[0.2em] uppercase transition-all duration-200 outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export default Button;
export { Button };
