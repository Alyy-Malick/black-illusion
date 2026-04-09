import React from 'react';
import { cn } from '@/utils/cn';

const SectionHeading = ({ 
  title, 
  eyebrow, 
  subtitle, 
  align = 'left', 
  action,
  className 
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={cn('flex flex-col gap-4 mb-12', alignmentClasses[align], className)}>
      {eyebrow && (
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">
          {eyebrow}
        </span>
      )}
      
      <div className={cn('flex w-full items-end justify-between gap-8', align === 'center' && 'justify-center')}>
        <div className={cn('flex flex-col gap-2', align === 'center' && 'items-center')}>
          <h2 className="text-white">{title}</h2>
          {subtitle && (
            <p className={cn('max-w-2xl text-muted-foreground', align === 'center' && 'text-center')}>
              {subtitle}
            </p>
          )}
        </div>
        
        {action && (
          <div className="hidden md:block pb-2">
            {action}
          </div>
        )}
      </div>
      
      {/* Mobile Action mobility */}
      {action && (
        <div className="md:hidden mt-4">
          {action}
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
