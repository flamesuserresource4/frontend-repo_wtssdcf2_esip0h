import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
      </main>
      <Footer />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white px-4 py-3 shadow-lg hover:bg-emerald-600"
      >
        Order via WhatsApp
      </a>
    </div>
  );
}

export default App;
