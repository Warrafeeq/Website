import React from 'react';
import { alumni } from '../data/members';

export default function Alumni() {
  return (
    <section className="relative max-w-6xl mx-auto py-16 px-4 bg-gradient-to-br from-indigo-50 via-blue-100 to-teal-50 min-h-screen overflow-hidden">
      <h2 className="text-4xl font-extrabold mb-8 text-blue-900 drop-shadow-lg text-center">Alumni</h2>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-200 rounded-full blur-2xl opacity-30 animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {alumni.map((a, i) => (
          <div key={i} className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 animate-float">
            <img src={a.photo} alt={a.name} className="w-24 h-24 rounded-full mb-4 shadow-lg" />
            <h3 className="font-bold text-lg text-blue-700 mb-2">{a.name}</h3>
            <p className="text-sm mb-2 text-teal-700">Current: {a.position}</p>
            <a href={`mailto:${a.email}`} className="text-blue-600">{a.email}</a>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
