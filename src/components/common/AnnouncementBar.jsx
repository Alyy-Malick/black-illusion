import React from 'react';
import { cn } from '@/utils/cn';

const AnnouncementBar = ({ 
  text = 'Free shipping on orders over $150',
  link,
  mode = 'static', // 'static' or 'marquee'
  className 
}) => {
  const isMarquee = mode === 'marquee';

  const Content = () => (
    <span className="inline-block px-12 text-[10px] font-bold uppercase tracking-[0.2em]">
      {text}
      {link && <a href={link} className="ml-2 underline underline-offset-4 hover:opacity-70 transition-opacity">Details</a>}
    </span>
  );

  return (
    <div className={cn(
      'h-10 bg-white text-black flex items-center overflow-hidden border-b border-white/10',
      className
    )}>
      {isMarquee ? (
        <div className="flex w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-2 items-center">
            {/* Repeat content for smooth loop */}
            {[...Array(6)].map((_, i) => (
              <Content key={i} />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center">
          <Content />
        </div>
      )}
    </div>
  );
};

export default AnnouncementBar;
