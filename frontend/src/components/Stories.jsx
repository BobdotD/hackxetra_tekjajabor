import React from 'react';

const storiesData = [
  { id: 1, title: 'Alumni Spotlight', description: 'Alumni making an impact globally.' },
  { id: 2, title: 'Reunion Highlights', description: 'Celebrating memorable moments.' },
];

const Stories = () => (
  <section className="text-center py-10">
    <h2 className="text-2xl font-bold text-blue-900">Featured Stories</h2>
    <div className="mt-6 flex flex-wrap justify-center gap-6">
      {storiesData.map((story) => (
        <div key={story.id} className="w-64 p-4 bg-white shadow rounded border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">{story.title}</h3>
          <p className="mt-2 text-gray-600">{story.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Stories;
