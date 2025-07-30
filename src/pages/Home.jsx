import React from 'react';

export default function Home() {
  return (
    <section className="relative max-w-4xl mx-auto py-16 px-4 bg-gradient-to-br from-blue-50 via-teal-100 to-indigo-100 min-h-screen overflow-hidden">
      <h1 className="text-5xl font-extrabold mb-10 text-blue-900 drop-shadow-lg text-center">The Nitin AUluck</h1>
      {/* Floating logo */}
      <img src="/logo.svg" alt="Rafedge Lab Logo" className="w-40 h-40 mb-6 animate-float absolute left-10 top-20 opacity-80" style={{zIndex:2}} />
      {/* Floating wallpaper images */}
      <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Distributed Computing" className="absolute right-10 top-32 w-32 h-32 rounded-full shadow-lg opacity-60 animate-float-slow" style={{zIndex:1}} />
      <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Edge Computing" className="absolute left-20 bottom-20 w-28 h-28 rounded-full shadow-lg opacity-60 animate-float" style={{zIndex:1}} />
      <div className="relative z-10 flex flex-col items-center">
        <p className="text-2xl mb-2 font-semibold text-teal-700">Scheduling Algorithms | Real-Time Systems | Edge Computing | Digital Healthcare | Digital Agriculture</p>
        <p className="max-w-xl text-center text-lg mb-8 text-gray-800 bg-white bg-opacity-70 rounded-xl p-4 shadow-lg">Innovating at the intersection of technology and society. Discover our research, projects, and people driving the future of distributed and real-time systems.</p>
        <a href="/about" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl shadow-lg hover:scale-105 hover:from-indigo-600 transition-all duration-300 font-bold text-lg">Learn More</a>
      </div>
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-300 rounded-full blur-2xl opacity-30 animate-pulse"></div>
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: float 7s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
