import React from 'react';

export default function Research() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4">Research & Projects</h2>
      <div className="space-y-6">
        {/* Example project card, replace with dynamic data */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Edge Scheduling for Healthcare IoT</h3>
          <p className="text-sm mb-2">Collaboration: IISc, Harvard, MedTech Inc.</p>
          <p className="text-xs text-gray-600">Ongoing research on real-time scheduling algorithms for distributed healthcare devices.</p>
        </div>
        {/* Add more project cards here */}
      </div>
    </section>
  );
}
