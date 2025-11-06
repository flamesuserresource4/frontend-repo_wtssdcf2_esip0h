import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#categories', label: 'Categories' },
    { href: '#about', label: 'About' },
  ];

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div
        className={`pointer-events-auto relative flex w-full max-w-5xl items-center justify-between rounded-full border border-white/60 bg-white/70 px-4 py-2 shadow-xl backdrop-blur-xl transition-all duration-300 md:px-6 ${
          elevated ? 'ring-1 ring-black/5 backdrop-saturate-150' : 'ring-0'
        }`}
        style={{
          backgroundImage:
            'radial-gradient(1200px 1200px at 50% -20%, rgba(255,255,255,0.85), rgba(255,255,255,0.6))',
        }}
      >
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2" aria-label="Teratai Cookies & Cakes">
          <span className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 shadow-inner" />
          <span className="text-sm font-semibold tracking-tight text-stone-800 md:text-base">
            Teratai Cookies & Cakes
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-stone-700 transition-colors hover:text-stone-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-500"
          >
            <MessageCircle size={18} />
            Order
          </a>
          <button
            className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white/80 p-2 text-stone-700 shadow-md transition hover:bg-white"
            aria-label="Cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="ml-2 inline-flex items-center justify-center rounded-full border border-stone-200 bg-white/70 p-2 text-stone-700 shadow md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Bubble shine */}
        <span className="pointer-events-none absolute -left-6 -top-8 h-16 w-16 rounded-full bg-white/50 blur-2xl" />
        <span className="pointer-events-none absolute -right-3 -bottom-6 h-10 w-10 rounded-full bg-amber-200/60 blur-xl" />
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="pointer-events-auto fixed left-0 right-0 top-20 z-40 mx-4 rounded-3xl border border-white/60 bg-white/80 p-4 shadow-2xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2 text-stone-800 hover:bg-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500/90 px-4 py-3 font-semibold text-white shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle size={18} /> Order via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
