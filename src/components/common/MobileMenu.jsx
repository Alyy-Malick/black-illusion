import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ShoppingBag } from 'lucide-react';
import { Button } from '../ui/Button';

const MobileMenu = ({ isOpen, onClose }) => {
  const links = [
    { label: 'Shop All', href: '/shop' },
    { label: 'Collections', href: '/collections' },
    { label: 'New Arrivals', href: '/new' },
    { label: 'Sale', href: '/sale' },
    { label: 'About', href: '/about' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-black"
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/5">
              <span className="font-display font-bold uppercase tracking-[0.2em] text-sm">Menu</span>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 px-6 py-12 flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="text-4xl font-black uppercase tracking-tighter hover:text-muted-foreground transition-colors"
                  onClick={onClose}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-white/5 flex flex-col gap-8 bg-surface">
              <div className="flex items-center justify-between">
                <div className="flex gap-6 mt-2">
                    <Search size={20} className="text-muted-foreground" />
                    <ShoppingBag size={20} className="text-muted-foreground" />
                </div>
                <Button size="sm" variant="outline">Account</Button>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Classic Roots, Bold Moves.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
