import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Rafedge Logo" className="w-10 h-10" />
          <span className="font-extrabold text-2xl text-red-600 tracking-wide drop-shadow">Rafedge Lab</span>
        </Link>
        <ul className="flex space-x-2">
          <li><Link to="/about" className="netflix-btn">About</Link></li>
          <li><Link to="/nitin-auluck" className="netflix-btn">Prof. Nitin Auluck</Link></li>
          <li><Link to="/members" className="netflix-btn">Members</Link></li>
          <li><Link to="/research" className="netflix-btn">Research</Link></li>
          <li><Link to="/publications" className="netflix-btn">Publications</Link></li>
          <li><Link to="/opportunities" className="netflix-btn">Opportunities</Link></li>
          <li><Link to="/news-events" className="netflix-btn">News & Events</Link></li>
          <li><Link to="/resources" className="netflix-btn">Resources</Link></li>
          <li><Link to="/gallery" className="netflix-btn">Gallery</Link></li>
          <li><Link to="/alumni" className="netflix-btn">Alumni</Link></li>
          <li><Link to="/contact" className="netflix-btn">Contact</Link></li>
        </ul>
      </div>
      <style>{`
        .netflix-btn {
          @apply px-4 py-2 rounded font-semibold text-white bg-red-600 hover:bg-red-700 shadow transition duration-200 ease-in-out;
        }
      `}</style>
    </nav>
  );
}
