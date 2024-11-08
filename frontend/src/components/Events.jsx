import React from 'react';

const eventsData = [
  { id: 1, title: 'Annual Meetup', date: '2024-11-25' },
  { id: 2, title: 'Career Networking', date: '2024-12-10' },
];

const Events = () => (
  <section className="text-center py-10">
    <h2 className="text-2xl font-bold text-blue-900">Upcoming Events</h2>
    <ul className="mt-6 space-y-4">
      {eventsData.map((event) => (
        <li key={event.id} className="p-4 bg-white shadow rounded border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
          <p className="text-gray-500">{event.date}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Events;
