import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Classic Butter Cookies',
    price: 7.5,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600&auto=format&fit=crop',
    category: 'Cookies',
  },
  {
    id: 2,
    name: 'Chocolate Chip Deluxe',
    price: 9.0,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop',
    category: 'Cookies',
  },
  {
    id: 3,
    name: 'Hari Raya Hamper',
    price: 49.0,
    image: 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=1600&auto=format&fit=crop',
    category: 'Hampers',
  },
  {
    id: 4,
    name: 'Assorted Gift Box',
    price: 29.0,
    image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1600&auto=format&fit=crop',
    category: 'Gift Box',
  },
  {
    id: 5,
    name: 'Red Velvet Cupcakes',
    price: 14.0,
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1600&auto=format&fit=crop',
    category: 'Cakes',
  },
  {
    id: 6,
    name: 'Matcha Almond Cookies',
    price: 11.0,
    image: 'https://images.unsplash.com/photo-1668724064504-9e7df15f08dc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXRjaGElMjBBbG1vbmQlMjBDb29raWVzfGVufDB8MHx8fDE3NjIzOTk2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    category: 'Cookies',
  },
];

const categories = ['All', 'Cookies', 'Cakes', 'Hampers', 'Gift Box'];

const Products = () => {
  const [active, setActive] = React.useState('All');
  const filtered = active === 'All' ? products : products.filter(p => p.category === active);

  return (
    <section id="products" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl md:text-4xl text-neutral-900">Our Favorites</h2>
          <div className="hidden md:flex gap-2">
            {categories.map(c => (
              <button key={c} onClick={() => setActive(c)} className={`px-4 py-2 rounded-full text-sm border transition-colors ${active === c ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="md:hidden mb-6 flex gap-2 overflow-x-auto">
          {categories.map(c => (
            <button key={c} onClick={() => setActive(c)} className={`px-4 py-2 rounded-full text-sm border whitespace-nowrap ${active === c ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-white text-neutral-700 border-neutral-200'}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, idx) => (
            <motion.a
              key={p.id}
              href="#"
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div className="relative overflow-hidden">
                <img src={p.image} alt={p.name} className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-neutral-900 font-medium">{p.name}</h3>
                  <span className="text-amber-800 font-semibold">${p.price.toFixed(2)}</span>
                </div>
                <button className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-amber-600/90 text-white py-2 text-sm hover:bg-amber-700 transition-colors">Add to Cart</button>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
