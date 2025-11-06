import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-ivory">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-amber-100 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-yellow-100 blur-3xl opacity-70" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-[0.2em] text-amber-700/80">Since 2011</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-tight text-neutral-900">
            Crafted with Love.
            <br />
            <span className="text-amber-700">Baked to Perfection.</span>
          </h1>
          <p className="mt-6 text-neutral-600 max-w-xl">
            Teratai brings the warmth of a family bakery into every bite. Premium ingredients, handmade in small batches for that melt-in-your-mouth goodness.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#products" className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-medium shadow hover:-translate-y-0.5 transition-transform">
              Explore Our Cookies
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-amber-400 bg-amber-50 text-amber-900 px-6 py-3 text-sm font-medium hover:bg-amber-100">
              Order Now
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&w=1600&auto=format&fit=crop"
              alt="Handmade cookies on a wooden table"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur rounded-xl px-4 py-3 shadow border border-neutral-200 hidden md:block">
            <p className="text-sm font-medium text-neutral-900">Small-batch baking</p>
            <p className="text-xs text-neutral-500">Freshly made every morning</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
