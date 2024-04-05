import React, { useState, useEffect } from 'react';

const StorageExample = () => {
  const [localData, setLocalData] = useState('');
  const [sessionData, setSessionData] = useState('');

  useEffect(() => {
    // Retrieve local storage data when component mounts
    const savedLocalData = localStorage.getItem('localData');
    if (savedLocalData) {
      setLocalData(savedLocalData);
    }

    // Retrieve session storage data when component mounts
    const savedSessionData = sessionStorage.getItem('sessionData');
    if (savedSessionData) {
      setSessionData(savedSessionData);
    }
  }, []);

  const handleLocalChange = (event) => {
    const { value } = event.target;
    // Update local state and local storage whenever input changes
    setLocalData(value);
    localStorage.setItem('localData', value);
  };

  const handleSessionChange = (event) => {
    const { value } = event.target;
    // Update local state and session storage whenever input changes
    setSessionData(value);
    sessionStorage.setItem('sessionData', value);
  };

  return (
    <div>
      <h2>Local Storage Example</h2>
      <input
        type="text"
        value={localData}
        onChange={handleLocalChange}
        placeholder="Enter data for local storage"
      />
      <p>Data stored in local storage: {localData}</p>

      <h2>Session Storage Example</h2>
      <input
        type="text"
        value={sessionData}
        onChange={handleSessionChange}
        placeholder="Enter data for session storage"
      />
      <p>Data stored in session storage: {sessionData}</p>
    </div>
  );
};

export default StorageExample;
