import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';
import { cn } from '@/utils/cn';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={cn(
        'sticky top-0 z-[90] w-full transition-all duration-300',
        isScrolled 
            ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' 
            : 'bg-transparent py-6'
      )}>
        <div className="container-wide flex items-center justify-between">
          {/* Left: Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
            <a href="/shop" className="hover:text-muted-foreground transition-colors">Shop</a>
            <a href="/collections" className="hover:text-muted-foreground transition-colors">Collections</a>
            <a href="/about" className="hover:text-muted-foreground transition-colors">About</a>
          </nav>

          {/* Left: Mobile Menu Trigger */}
          <button 
            className="md:hidden p-2 -ml-2 hover:bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>

          {/* Center: Logo */}
          <a href="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-xl md:text-2xl font-black uppercase tracking-[0.4em] leading-none m-0">
               Black Illusion
            </h1>
          </a>

          {/* Right: Icons */}
          <div className="flex items-center gap-2 md:gap-6">
            <button className="p-2 hover:text-muted-foreground transition-colors hidden md:block">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button className="p-2 hover:text-muted-foreground transition-colors hidden md:block">
              <User size={18} strokeWidth={1.5} />
            </button>
            <button className="p-2 flex items-center gap-1 hover:text-muted-foreground transition-colors">
              <ShoppingBag size={18} strokeWidth={1.5} />
              <span className="text-[10px] font-bold mt-1">(0)</span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;
