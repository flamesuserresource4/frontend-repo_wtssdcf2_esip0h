import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fffdf8] text-neutral-900 selection:bg-amber-100 selection:text-neutral-900">
      <Navbar />
      <main>
        {/* Hero */}
        <section id="home" aria-label="Hero">
          <Hero />
        </section>

        {/* Categories */}
        <section id="categories" aria-label="Categories" className="scroll-mt-24">
          <Categories />
        </section>

        {/* About */}
        <section id="about" aria-label="About Teratai" className="scroll-mt-24">
          <About />
        </section>

        {/* Featured Cakes/Products */}
        <section id="products" aria-label="Featured Cakes" className="scroll-mt-24">
          <Products />
        </section>

        {/* Testimonials brought back below About and Featured Cakes */}
        <section id="testimonials" aria-label="Customer Testimonials" className="scroll-mt-24">
          <Testimonials />
        </section>
      </main>

      <Footer />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white px-4 py-3 shadow-lg ring-1 ring-emerald-400/40 hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80 transition"
        aria-label="Order via WhatsApp"
      >
        Order via WhatsApp
      </a>
    </div>
  );
}

export default App;
