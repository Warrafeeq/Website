import React from 'react';

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <div className="mb-6">
        <p>Email: <a href="mailto:info@rafedge.edu" className="text-blue-600">info@rafedge.edu</a></p>
        <p>Address: 123 Academic Lane, Tech City, Country</p>
        <div className="mt-4">
          <iframe title="Campus Map" src="https://www.openstreetmap.org/export/embed.html?bbox=77.5946%2C12.9716%2C77.5946%2C12.9716&amp;layer=mapnik" width="100%" height="300" className="border rounded"></iframe>
        </div>
        <div className="flex space-x-4 mt-4">
          <a href="https://twitter.com/rafedge" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><img src="/assets/twitter.svg" alt="Twitter" className="w-6 h-6" /></a>
          <a href="https://linkedin.com/company/rafedge" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src="/assets/linkedin.svg" alt="LinkedIn" className="w-6 h-6" /></a>
          <a href="https://facebook.com/rafedge" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><img src="/assets/facebook.svg" alt="Facebook" className="w-6 h-6" /></a>
        </div>
      </div>
      <form className="bg-white rounded-lg shadow p-4 max-w-md mx-auto">
        <label className="block mb-2 font-semibold">Name</label>
        <input type="text" className="w-full mb-4 p-2 border rounded" required />
        <label className="block mb-2 font-semibold">Email</label>
        <input type="email" className="w-full mb-4 p-2 border rounded" required />
        <label className="block mb-2 font-semibold">Message</label>
        <textarea className="w-full mb-4 p-2 border rounded" rows="4" required></textarea>
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send</button>
      </form>
    </section>
  );
}
