// LOCALSTORAGE IN REACT:-
// In React, `localStorage` is a built-in web API that provides a way to store key-value pairs in a web browser with no expiration time. It allows you to store data locally within the user's browser, persisting even after the browser is closed and reopened.
// `localStorage` is useful in React applications for storing small amounts of data that you want to persist across page reloads or even across browser sessions. Common use cases for `localStorage` in React include:
// 1. **User Preferences**: Storing user preferences such as theme selection, language preference, etc.
// 2. **Authentication Tokens**: Storing authentication tokens received from a server after successful login to keep the user authenticated across page refreshes.
// 3. **Cached Data**: Storing cached data that can be reused across multiple visits to the application to reduce load times.
// 4. **Form Data**: Storing form data temporarily so that users can continue where they left off in case of accidental refresh or navigating away from the page.

// When using `localStorage` in a React application, you typically interact with it using JavaScript methods like `localStorage.getItem(key)`, `localStorage.setItem(key, value)`, `localStorage.removeItem(key)`, etc. These methods allow you to read, write, and delete data from the `localStorage` object.

// Here's a basic example of using `localStorage` in a React component:

import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // Load count from localStorage when the component mounts
  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      setCount(parseInt(storedCount));
    }
  }, []);

  // Save count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default MyComponent;


// In this example, the `count` state is stored in `localStorage`. 
// The count is initially loaded from `localStorage` when the component mounts, and it's saved to `localStorage` whenever it changes.
// This ensures that the count persists across page reloads.