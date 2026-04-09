import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Button } from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

// Assets
import FeaturedImage from '@/assets/featured-drop.png';

const FeaturedDrop = () => {
  return (
    <Section spacing="lg" container="none" className="bg-white text-black overflow-hidden py-0 md:py-0">
      <div className="flex flex-col md:flex-row min-h-[80vh]">
        {/* Campaign Visual */}
        <div className="w-full md:w-3/5 relative min-h-[500px] bg-surface">
          <img 
            src={FeaturedImage} 
            alt="New Drop Campaign"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Editorial Overlay Text */}
          <div className="absolute top-12 left-12 mix-blend-difference text-white">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em]">2026 / 04</span>
          </div>
        </div>

        {/* Campaign Description / Product Focus */}
        <div className="w-full md:w-2/5 flex flex-col justify-center p-8 md:p-20 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Badge variant="solid" className="bg-black text-white">New Drop</Badge>
                <span className="text-[10px] uppercase tracking-widest font-black">Signature Series</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                The Void <br /> Oversized Tee
              </h2>
            </div>
            
            <p className="text-black/60 text-sm md:text-base max-w-sm leading-relaxed uppercase tracking-tight">
              A masterclass in proportions. Heavyweight 300GSM cotton. Dropped shoulders. The definitive streetwear silhouette, reinvented for the modern void.
            </p>

            <div className="pt-4 flex flex-col gap-6">
               <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-widest">Available Now</span>
                  <span className="text-xl font-black">$48.00</span>
               </div>
               <div className="flex gap-4">
                  <Button variant="primary" className="bg-black text-white border-black hover:bg-transparent hover:text-black">Add To Bag</Button>
                  <Button variant="outline" className="border-black/20 text-black hover:border-black">Details</Button>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedDrop;
