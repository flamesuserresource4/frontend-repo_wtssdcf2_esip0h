import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Alya P.',
    text: 'The best butter cookies I have ever had. You can taste the quality in every bite!',
  },
  {
    name: 'Jonathan L.',
    text: 'Ordered hampers for Eid — beautifully packed and everyone loved them.',
  },
  {
    name: 'Maya R.',
    text: 'Feels like a warm hug in cookie form. Customer service is lovely too!',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl text-neutral-900">What Our Customers Say</h2>
          <p className="mt-3 text-neutral-600">Stories from people who made Teratai part of their celebrations.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.1 }} className="rounded-2xl bg-white border border-neutral-200 p-6 shadow-[0_5px_15px_rgba(0,0,0,0.06)]">
              <div className="flex gap-1 text-amber-600 mb-3" aria-hidden>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#d97706" stroke="#d97706" />
                ))}
              </div>
              <p className="text-neutral-700">“{t.text}”</p>
              <p className="mt-4 text-sm text-neutral-500">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
