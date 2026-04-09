import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2000&auto=format&fit=crop" 
          alt="Black Illusion Hero"
          className="h-full w-full object-cover grayscale brightness-75 transition-transform duration-[30s] scale-100 animate-pulse-slow"
        />
      </div>

      {/* Hero Content */}
      <div className="container-wide relative z-20 text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
           className="mb-8"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-white/40">
            Nostalgic 90s Streetwear
          </span>
        </motion.div>
        
        <div className="overflow-hidden mb-12">
          <motion.h1 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="text-white relative"
          >
            Classic Roots <br /> 
            <span className="text-stroke-white text-transparent">Bold Moves</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" variant="primary">Shop Collection</Button>
          <Button size="lg" variant="outline">View Lookbook</Button>
        </motion.div>
      </div>

      {/* Decorative Bottom Details */}
      <div className="absolute bottom-12 w-full px-6 flex justify-between items-end text-white/20 z-20">
        <div className="hidden md:block">
            <span className="text-[8px] uppercase tracking-[0.4em]">Est. MMXXVI</span>
        </div>
        <div className="flex flex-col items-center gap-4 animate-bounce">
            <span className="text-[9px] uppercase tracking-widest rotate-90 mb-4">Focus</span>
        </div>
        <div className="hidden md:block text-right">
            <span className="text-[8px] uppercase tracking-[0.4em]">Noir Essentials</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
