/*
Let an array of strings called fruits, for ex- ['apple', 'banana', 'cherry'. 'date']
Display this list in the UI.

Search Input:
Use the provided input fields.
As the user types into the input, filter the displayed list to include only those items that is being typed in the input field.

Real-Time Filtering: 
This list should update as soon as the user types into the search box, without needing to submit 

Display a friendly message if no items match the search term.
*/

import React, { useState } from 'react';

const SearchFilter = () => {
    const [fruitData, setFruitData] = useState(fruits);
    const [searchTerm, setSearchTerm] = useState("");
    const fruits = [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Grapes',
        'Mango',
        'Orange',
        'Pineapple',
        'Berry',
        'Strawberry'
    ]

  return (
    <div>
        <input type='search' placeholder='Search here...' onChange={searchFruit()} />

    </div>
  )
}

export default SearchFilter;