import React from 'react';

export default function NewsEvents() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-4">News & Events</h2>
      <div className="space-y-6">
        {/* Example event card, replace with dynamic data */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold">Upcoming Seminar: Edge Computing in Healthcare</h3>
          <p className="text-sm mb-2">August 15, 2025 | Online</p>
          <p className="text-xs text-gray-600">Join us for a seminar on the latest advances in edge computing for digital healthcare.</p>
        </div>
        {/* Add more event cards here */}
      </div>
    </section>
  );
}
