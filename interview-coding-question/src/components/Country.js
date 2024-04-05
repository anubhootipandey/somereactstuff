import { useState } from 'react';

const countries = [
  { name: 'India', value: 'IN', cities: [
    'Delhi',
    'Mumbai'
  ]},
  { name: 'Pak', value: 'PK', cities: [
    'Lahore',
    'Karachi'
  ]},
  { name: 'Bangladesh', value: 'BG', cities: [
    'Dhaka',
    'Chittagong'
  ]},
];

function Country() {
  const [country, setCountry] = useState("");

  return (
    <div className="country-container">
     <select onChange={(e) => {
      console.log(e.target.value);
      setCountry(e.target.value);
     }}>
      {
        countries.map((item, index) => {
          return (<option value={index}>{item.name}</option>)
        })
      }
     </select>
     <select value={country}>
      {
        countries[country].cities.map((item, index) => {
          return <option value={index}>{item}</option>
        })
      }
     </select>
    </div>
  );
}

export default Country;
