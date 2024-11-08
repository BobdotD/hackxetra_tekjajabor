import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center py-6">
      <input
        type="text"
        placeholder="Search Alumni, Events, Stories..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 w-80 border border-gray-300 rounded-l focus:outline-none"
      />
      <button type="submit" className="px-4 py-2 bg-blue-900 text-white rounded-r hover:bg-blue-700">
        Search
      </button>
    </form>
  );
};

export default Search;
