import React from 'react';
import Section from './Section';
import SectionHeading from '@/components/ui/SectionHeading';
import { ProductCard } from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/Button';

const ProductListing = () => {
  const curatedProducts = [
    {
      id: 1,
      name: 'Illusion Oversized Tee',
      price: '45.00',
      category: 'Signature Tops',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
      isNew: true
    },
    {
      id: 2,
      name: 'Roots Graphic Tank',
      price: '38.00',
      category: 'Summer Series',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Vintage Sun-Faded Hoodie',
      price: '95.00',
      category: 'Fleece',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Monochrome Box Tee',
      price: '45.00',
      category: 'Basics',
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
      isSoldOut: true
    }
  ];

  return (
    <Section spacing="lg">
      <SectionHeading 
        title="Essential Drops"
        eyebrow="New Arrivals"
        subtitle="Our core silhouettes, refined for the modern void. Built with heavyweight 300GSM+ materials and cinematic fits."
        action={<Button variant="outline" size="sm">View All Essentials</Button>}
      />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12">
        {curatedProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </Section>
  );
};

export default ProductListing;
