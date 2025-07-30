import React from 'react';

export default function Opportunities() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4">Opportunities</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Internships (Undergraduate, Graduate)</li>
        <li>PhD Positions</li>
        <li>Postdoctoral Fellowships</li>
      </ul>
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold mb-2">How to Join</h3>
        <ol className="list-decimal pl-6">
          <li>Review open positions above.</li>
          <li>Prepare your CV and research statement.</li>
          <li>Email Prof. Nitin with your application.</li>
        </ol>
      </div>
    </section>
  );
}
