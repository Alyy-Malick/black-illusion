import React from 'react';

import Section from './Section';

const BrandStory = () => {
  return (
    <Section spacing="lg" container="content" className="bg-black text-white py-32 md:py-48">
      <div className="flex flex-col items-center text-center space-y-12">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
           className="relative"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 mb-12 block">
            Our Manifesto
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] max-w-5xl">
            Classic Roots. <br />
            <span className="text-transparent text-stroke-white opacity-30">Bold Transitions.</span> <br />
            Built In <span className="underline underline-offset-8 decoration-1">The Void.</span>
          </h2>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="max-w-xl mx-auto space-y-8"
        >
          <p className="text-white/60 text-xs md:text-sm leading-loose uppercase tracking-widest text-center px-6">
            Black Illusion is more than a silhouette. It's a dialogue between the 90s era of raw expression and the minimalist precision of tomorrow. We don't chase trends; we explore the foundations of the modern street identity. 
          </p>
          <div className="flex items-center justify-center gap-4 text-white/20">
            <span className="w-12 h-px bg-current"></span>
            <span className="text-[10px] font-bold tracking-[0.4em]">MMXXVI</span>
            <span className="w-12 h-px bg-current"></span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default BrandStory;
