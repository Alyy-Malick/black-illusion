import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <h2 className="text-xl font-black uppercase tracking-extrawide leading-none">Black Illusion</h2>
            <p className="text-[11px] uppercase tracking-widest leading-loose text-muted-foreground">
                Classic Roots, Bold Moves. <br />
                Nostalgic 90s streetwear foundation.
            </p>
            <div className="flex gap-6">
                <a href="#" className="flex items-center gap-1 group">
                    <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">Instagram</span>
                    <ArrowUpRight size={10} className="text-muted-foreground group-hover:text-white transition-colors" />
                </a>
                <a href="#" className="flex items-center gap-1 group">
                    <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">Twitter</span>
                    <ArrowUpRight size={10} className="text-muted-foreground group-hover:text-white transition-colors" />
                </a>
                <a href="#" className="flex items-center gap-1 group">
                    <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">Facebook</span>
                    <ArrowUpRight size={10} className="text-muted-foreground group-hover:text-white transition-colors" />
                </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Shop</h3>
            <ul className="space-y-3 text-[11px] uppercase tracking-widest text-muted-foreground">
                <li><a href="/shop" className="hover:text-white transition-colors">All Products</a></li>
                <li><a href="/new" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="/collections" className="hover:text-white transition-colors">Collections</a></li>
                <li><a href="/sale" className="hover:text-white transition-colors">Archive / Sale</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Support</h3>
            <ul className="space-y-3 text-[11px] uppercase tracking-widest text-muted-foreground">
                <li><a href="/shipping" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/faq" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="/size-guide" className="hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Join The Void</h3>
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                Be the first to know about drops.
            </p>
            <div className="relative border-b border-white/20 pb-2">
                <input 
                    type="email" 
                    placeholder="EMAIL ADDRESS" 
                    className="bg-transparent w-full text-[10px] uppercase font-bold tracking-widest focus:outline-none placeholder:text-muted"
                />
                <button className="absolute right-0 bottom-2 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                    Join
                </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-[9px] uppercase tracking-widest text-muted-foreground">
            <p>&copy; 2026 Black Illusion. All Rights Reserved.</p>
            <div className="flex gap-8">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                <span>Built for the culture</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
