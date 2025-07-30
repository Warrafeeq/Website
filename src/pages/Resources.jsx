import React from 'react';

export default function Resources() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4">Resources</h2>
      <ul className="list-disc pl-6 mb-6">
        <li><a href="/assets/dataset1.zip" className="text-blue-600" download>Healthcare IoT Dataset</a></li>
        <li><a href="/assets/code1.zip" className="text-blue-600" download>Edge Scheduling Source Code</a></li>
        <li><a href="https://github.com/rafedge-lab" className="text-blue-600" target="_blank" rel="noopener noreferrer">Lab GitHub</a></li>
      </ul>
    </section>
  );
}
