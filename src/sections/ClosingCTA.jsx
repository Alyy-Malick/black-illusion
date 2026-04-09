import React from 'react';


import Section from './Section';
import { Button } from '@/components/ui/Button';

const ClosingCTA = () => {
  return (
    <Section spacing="lg" className="bg-white text-black py-32 md:py-48 mt-12">
      <div className="flex flex-col items-center text-center space-y-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="space-y-4"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-black/40">
            Secure Your Access
          </span>
          <h2 className="text-4xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] max-w-4xl">
            Join The <br />
            <span className="text-black/20">Archive.</span>
          </h2>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="w-full max-w-md space-y-8"
        >
          <p className="text-black/60 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium leading-loose">
            Be the first to know about seasonal drops, archive sales, and exclusive culture events. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
             <div className="flex-1 relative border-b border-black/40 pb-2">
                <input 
                  type="email" 
                  placeholder="EMAIL@THEVOID.COM" 
                  className="w-full bg-transparent text-xs font-bold uppercase tracking-widest placeholder:text-black/20 focus:outline-none"
                />
             </div>
             <Button variant="primary" className="bg-black text-white hover:bg-black/80">Subscribe</Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ClosingCTA;
