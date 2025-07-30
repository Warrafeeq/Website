import React from 'react';
import { galleryImages } from '../data/gallery';

export default function Gallery() {
  return (
    <section className="relative max-w-6xl mx-auto py-16 px-4 bg-gradient-to-br from-indigo-100 via-blue-50 to-teal-100 min-h-screen overflow-hidden">
      <h2 className="text-4xl font-extrabold mb-8 text-blue-900 drop-shadow-lg text-center">Photo Gallery</h2>
      {/* Floating wallpaper shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-200 rounded-full blur-2xl opacity-30 animate-pulse"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">
        {galleryImages.map((img, i) => (
          <div key={i} className="relative group overflow-hidden rounded-2xl shadow-xl bg-white bg-opacity-80 hover:scale-105 transition-transform duration-300">
            <img src={img.src} alt={img.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 animate-float" />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-900 via-transparent to-transparent p-4">
              <span className="block text-lg font-bold text-white drop-shadow">{img.title}</span>
              <span className="block text-xs text-blue-100 mt-1">{img.caption}</span>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
