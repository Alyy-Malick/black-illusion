import React from 'react';
import Section from './Section';
import SectionHeading from '@/components/ui/SectionHeading';
import CollectionCard from '@/components/ui/CollectionCard';
import { Button } from '@/components/ui/Button';

const CollectionsGrid = () => {
  return (
    <Section spacing="lg">
      <SectionHeading 
        title="Curated Segments"
        eyebrow="Browse"
        subtitle="Exploring the intersections of nostalgia and contemporary edge."
        action={<Button variant="outline" size="sm">Explore Catalog</Button>}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <CollectionCard 
          title="Oversized Foundations"
          subtitle="Heavyweight tees and sweats."
          image="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop"
          link="/collections/oversized"
          className="aspect-4/5 md:aspect-auto md:h-[600px]"
        />
        <CollectionCard 
          title="Vintage Fleece"
          subtitle="Sun-faded aesthetic, premium warmth."
          image="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200&auto=format&fit=crop"
          link="/collections/fleece"
          className="aspect-4/5 md:aspect-auto md:h-[600px] md:translate-y-12"
        />
      </div>
    </Section>
  );
};

export default CollectionsGrid;
