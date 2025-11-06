import React from 'react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl text-neutral-900">Teratai Cookies & Cakes</h3>
          <p className="mt-3 text-neutral-600 max-w-md">Handmade treats crafted with premium ingredients and heartfelt care. Perfect for gifting and everyday joy.</p>
        </div>
        <div>
          <p className="text-sm font-medium text-neutral-900 mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li className="flex items-center gap-2"><Phone size={16} /> +62 812-3456-7890</li>
            <li className="flex items-center gap-2"><Mail size={16} /> hello@terataicakes.com</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Jl. Mawar No. 11, Jakarta</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-neutral-900 mb-3">Follow Us</p>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50">
            <Instagram size={16} /> @terataicakes
          </a>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Teratai Cookies & Cakes — All rights reserved.</div>
    </footer>
  );
};

export default Footer;
