import React from 'react';
import { cn } from '@/utils/cn';

const Section = ({ 
  children, 
  as: Component = 'section',
  container = 'wide', // 'wide', 'content', 'narrow', 'none'
  spacing = 'md', // 'sm', 'md', 'lg', 'none'
  className,
  ...props 
}) => {
  const containerClasses = {
    wide: 'container-wide',
    content: 'container-content',
    narrow: 'container-narrow',
    none: '',
  };

  const spacingClasses = {
    sm: 'section-padding-sm',
    md: 'section-padding-md',
    lg: 'section-padding-lg',
    none: '',
  };

  return (
    <Component 
      className={cn(spacingClasses[spacing], className)} 
      {...props}
    >
      <div className={cn(containerClasses[container], 'h-full')}>
        {children}
      </div>
    </Component>
  );
};

export default Section;
