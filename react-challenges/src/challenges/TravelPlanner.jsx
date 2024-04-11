import React, { useState } from 'react';

const TravelPlanner = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [plannedTrips, setPlannedTrips] = useState([]);

  const addTrip = () => {
    if (destination.trim() !== '' && startDate !== '' && endDate !== '') {
      setPlannedTrips([
        ...plannedTrips,
        {
          id: Date.now(),
          destination: destination,
          startDate: startDate,
          endDate: endDate
        }
      ]);
      setDestination('');
      setStartDate('');
      setEndDate('');
    }
  };

  const deleteTrip = (tripId) => {
    setPlannedTrips(plannedTrips.filter(trip => trip.id !== tripId));
  };

  return (
    <div>
      <h1>Travel Planner</h1>
      <div>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Destination"
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={addTrip}>Add Trip</button>
      </div>
      <ul>
        {plannedTrips.map(trip => (
          <li key={trip.id}>
            <div>
              <strong>Destination:</strong> {trip.destination}
            </div>
            <div>
              <strong>Start Date:</strong> {trip.startDate}
            </div>
            <div>
              <strong>End Date:</strong> {trip.endDate}
            </div>
            <button onClick={() => deleteTrip(trip.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelPlanner;
