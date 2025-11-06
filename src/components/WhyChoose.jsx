import React from 'react';
import { Leaf, Heart, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Leaf,
    title: 'Premium Ingredients',
    desc: 'We source real butter, nuts, and spices — no shortcuts, ever.',
  },
  {
    icon: Heart,
    title: 'Homemade Freshness',
    desc: 'Baked in small batches for that warm, just-out-of-the-oven taste.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Since 2011',
    desc: 'A family bakery loved by thousands for over a decade.',
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-[url('https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center">
      <div className="backdrop-brightness-95 py-2">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-neutral-900">Why Choose Teratai</h2>
            <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">Elegance in simplicity — every cookie tells a story of care and craftsmanship.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="rounded-2xl bg-white/90 backdrop-blur border border-amber-100 p-6 shadow-[0_5px_15px_rgba(0,0,0,0.06)]">
                  <div className="h-10 w-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-medium text-neutral-900">{f.title}</h3>
                  <p className="text-neutral-600 mt-2 text-sm">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
