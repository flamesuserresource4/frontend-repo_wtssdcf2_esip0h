import React from 'react';
import { ShoppingCart, Phone, Instagram } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-neutral-200/60 dark:bg-black/50 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 shadow-[0_5px_15px_rgba(0,0,0,0.12)] group-hover:scale-105 transition-transform" />
          <div>
            <p className="text-lg font-serif tracking-wide text-neutral-900 dark:text-white">Teratai Cookies & Cakes</p>
            <p className="text-xs text-neutral-500">Handmade since 2011</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm text-neutral-700 hover:text-amber-700 transition-colors dark:text-neutral-300">Home</a>
          <a href="#products" className="text-sm text-neutral-700 hover:text-amber-700 transition-colors dark:text-neutral-300">Products</a>
          <a href="#about" className="text-sm text-neutral-700 hover:text-amber-700 transition-colors dark:text-neutral-300">About</a>
          <a href="#contact" className="text-sm text-neutral-700 hover:text-amber-700 transition-colors dark:text-neutral-300">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-amber-50 px-4 py-2 text-sm text-amber-800 hover:bg-amber-100 transition-shadow shadow-sm hover:shadow"
          >
            <Phone size={16} /> Order
          </a>
          <a
            href="#cart"
            className="inline-flex p-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors dark:bg-white dark:text-black"
            aria-label="Cart"
          >
            <ShoppingCart size={18} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex p-2 rounded-full border border-neutral-200 hover:border-neutral-300 transition-colors dark:border-white/10"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
