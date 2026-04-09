import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import Badge from './Badge';

const ProductCard = ({ 
  product, 
  className 
}) => {
  const { name, price, category, image, isNew, isSoldOut } = product || {};

  return (
    <div className={cn('group cursor-pointer', className)}>
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-surface transition-colors duration-300 group-hover:bg-surface-elevated">
        <motion.img
          src={image || 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000&auto=format&fit=crop'} 
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          initial={false}
        />
        
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

        {/* Status Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && <Badge variant="solid">New Drop</Badge>}
          {isSoldOut && <Badge variant="muted" className="bg-black/60 backdrop-blur-sm">Sold Out</Badge>}
        </div>

        {/* Quick Add Placeholder (Minimal) */}
        <div className="absolute bottom-0 left-0 w-full translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <button className="w-full bg-white text-black py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-muted-foreground transition-colors">
                Quick Add
            </button>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-white group-hover:text-muted-foreground transition-colors">
            {name || 'Product Silhouette'}
          </h3>
          <p className="text-[10px] uppercase text-muted-foreground tracking-wider">
            {category || 'Streetwear'}
          </p>
        </div>
        <span className="text-[11px] font-medium tracking-tight text-white">
          ${price || '0.00'}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
export { ProductCard };
