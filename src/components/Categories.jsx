import React from 'react';

const categories = [
  {
    key: 'signature-cakes',
    name: 'Signature Cakes',
    emoji: '🍰',
    desc: 'Classic layered cakes with silky cream and premium toppings.'
  },
  {
    key: 'artisan-cookies',
    name: 'Artisan Cookies',
    emoji: '🍪',
    desc: 'Handcrafted cookies with balanced sweetness and crunch.'
  },
  {
    key: 'cupcakes',
    name: 'Cupcakes',
    emoji: '🧁',
    desc: 'Bite-sized indulgence with swirls of buttercream.'
  },
  {
    key: 'gift-sets',
    name: 'Gift Sets',
    emoji: '🎁',
    desc: 'Beautifully packaged sets perfect for celebrations.'
  }
];

export default function Categories() {
  return (
    <section id="categories" className="relative py-16 md:py-20 bg-[#faf8f3]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="uppercase tracking-widest text-[12px] text-amber-700/70">Browse by category</p>
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Our Collections</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">Discover your favorites faster. Explore our most loved categories, curated for every sweet moment.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map(cat => (
            <a key={cat.key} href="#products" className="group rounded-xl bg-white/80 backdrop-blur border border-amber-900/10 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">{cat.emoji}</div>
              <h3 className="font-serif text-lg md:text-xl text-neutral-900">{cat.name}</h3>
              <p className="text-sm text-neutral-600 mt-1">{cat.desc}</p>
              <div className="mt-4 text-amber-700 group-hover:translate-x-0.5 transition-transform text-sm">Shop now →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
