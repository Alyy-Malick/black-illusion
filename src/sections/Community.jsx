import React from 'react';
import Section from './Section';
import SectionHeading from '@/components/ui/SectionHeading';

const Community = () => {
  const images = [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1539109132332-6291639a0304?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529139572765-39d997fe0540?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop',
  ];

  return (
    <Section spacing="lg">
      <SectionHeading 
        title="Seen In The Void"
        eyebrow="Community"
        align="center"
        subtitle="Black Illusion is a shared expression. Our community defines the silhouette. Street captures from Tokyo, London, and Berlin."
      />
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[800px]">
        {/* Large Feature Image */}
        <div className="col-span-2 row-span-2 relative overflow-hidden bg-surface group">
          <img 
            src={images[0]} 
            alt="Community Visual"
            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
        </div>
        
        {/* Smaller Support Images */}
        <div className="relative overflow-hidden bg-surface group hidden lg:block">
           <img 
            src={images[1]} 
            alt="Community Visual"
            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden bg-surface group">
           <img 
            src={images[2]} 
            alt="Community Visual"
            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden bg-surface group col-span-2 lg:col-span-1">
           <img 
            src={images[3]} 
            alt="Community Visual"
            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden bg-surface group hidden lg:block">
           <img 
            src={images[4]} 
            alt="Community Visual"
            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          />
        </div>
      </div>
      
      <div className="mt-12 flex justify-center">
        <button className="text-[10px] uppercase font-bold tracking-[0.4em] border-b border-white pb-1 hover:text-muted-foreground hover:border-white/20 transition-all">
          Join The Collective
        </button>
      </div>
    </Section>
  );
};

export default Community;
