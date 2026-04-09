import React, { useEffect } from 'react';
import {  useScroll, useSpring } from 'framer-motion';

// Sections
import Hero from '@/sections/Hero';
import FeaturedDrop from '@/sections/FeaturedDrop';
import CollectionsGrid from '@/sections/CollectionsGrid';
import BrandStory from '@/sections/BrandStory';
import ProductListing from '@/sections/ProductListing';
import Community from '@/sections/Community';
import ClosingCTA from '@/sections/ClosingCTA';

const Home = () => {
  // Page-level Scroll Progress for subtle indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Simple scroll-to-top on enter
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black overflow-x-hidden">
      {/* Subtle Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-px bg-white z-110 origin-left"
        style={{ scaleX }}
      />

      {/* Homepage Composition */}
      <div className="space-y-0">
        <Hero />
        <FeaturedDrop />
        <CollectionsGrid />
        <BrandStory />
        <ProductListing />
        <Community />
        <ClosingCTA />
      </div>

      {/* Global Scroll Reveal Helper (Invisible but ensures smooth flow) */}
      <div className="h-24 bg-surface" />
    </div>
  );
};

export default Home;
