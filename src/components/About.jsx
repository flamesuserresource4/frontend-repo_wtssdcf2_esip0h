import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-widest text-[12px] text-amber-700/70">Our Story</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-serif text-neutral-900">Teratai Cookies & Cakes</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Since 2011, we craft small-batch cookies and cakes with premium ingredients and time-honored techniques. Our kitchen blends Indonesian warmth with classic patisserie, creating flavors that feel both nostalgic and new.
          </p>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Every order is made fresh, packaged with care, and designed to turn simple moments into little celebrations. From buttery Nastar to elegant signature cakes, we bake with heart—so you can share joy with yours.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-[#faf8f3] border border-amber-900/10 text-sm text-amber-900">Premium Butter</span>
            <span className="px-3 py-1 rounded-full bg-[#faf8f3] border border-amber-900/10 text-sm text-amber-900">Real Vanilla</span>
            <span className="px-3 py-1 rounded-full bg-[#faf8f3] border border-amber-900/10 text-sm text-amber-900">No Preservatives</span>
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1541782814453-f7abf9a79a48?q=80&w=2069&auto=format&fit=crop"
            alt="Baking studio"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
