import React from 'react';

const fruits = ['Apple', 'Mango', 'Oranges', 'Grapes', 'Banana'];
//Todo: Create a list from the above array

const ArrayToList = () => {
  return (
    <div>
        <ul>
            {fruits.map((fruit, index) => {
                return <li key={index}>{fruit}</li>;
            })}
        </ul>
    </div>
  )
}

export default ArrayToList;