import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

const CollectionCard = ({ 
  title, 
  subtitle, 
  image, 
  link = '#',
  className 
}) => {
  return (
    <a 
      href={link}
      className={cn('group relative block aspect-[16/9] overflow-hidden bg-surface', className)}
    >
      <motion.img
        src={image || 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?q=80&w=1200&auto=format&fit=crop'} 
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        initial={false}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/20" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        <span className="mb-2 text-[10px] uppercase tracking-[0.4em] text-white/70">
            Collection
        </span>
        <h2 className="mb-4 text-white drop-shadow-lg">
          {title || 'Seasonal Drop'}
        </h2>
        
        <div className="overflow-hidden">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white pb-1 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                Explore Now
            </span>
        </div>
      </div>
    </a>
  );
};

export default CollectionCard;
