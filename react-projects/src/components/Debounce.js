// ✅ 1. Debouncing in React (e.g. Live search input)
// 🧠 Use Case:
// Only make an API call after the user stops typing for, say, 500ms.

// 🔧 Code:

import React, { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer); // clean up on value change
  }, [value, delay]);

  return debouncedValue;
}

function SearchComponent() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      console.log('API CALL for:', debouncedSearch); // Replace with fetch
    }
  }, [debouncedSearch]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="p-2 border rounded"
    />
  );
}

export default SearchComponent;


// ✅ What’s Happening?

// We type something into the input.
// The API call only happens 500ms after you stop typing.
// Reduces API load & improves performance 🚀


