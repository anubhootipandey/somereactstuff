import React, { useState } from 'react';

const App = () => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    setCity('');
  } 

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={(e) => setCity(e.target.value)} value={city} placeholder='Enter city name...' />
          <button>Search</button>
        </form>
      </div>
      <div>
        <h3>Jaipur <span>IN</span> </h3>
        <h2>9.62oC</h2>
      </div>
    </>
  )
}

export default App;