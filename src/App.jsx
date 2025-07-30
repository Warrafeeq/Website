
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Opportunities from './pages/Opportunities';
import NewsEvents from './pages/NewsEvents';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Alumni from './pages/Alumni';
import NitinAuluck from './pages/NitinAuluck';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nitin-auluck" element={<NitinAuluck />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/alumni" element={<Alumni />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App
