import React, { useState } from 'react';

const FilterList = () => {
    const [search, setSearch] = useState('');
    const fruits = ['Apple', 'Orange', 'Guava', 'Banana', 'Grapes'];

    const filteredFruits = fruits.filter((fruit) => fruit.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
        <input 
        type='text'
        placeholder='Search...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
            {filteredFruits.map((fruit, index) => (
                <li key={index}>
                    {fruit}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FilterList;