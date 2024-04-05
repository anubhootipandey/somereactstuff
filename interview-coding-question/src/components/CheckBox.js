import React, { useState } from 'react';
import List from './List'

//list with checkbox and delete button

const CheckBox = () => {
  const arr = ["play cricket", "play video games", "read books"];
  const[arrCopy, setArrCopy] = useState(arr);

  const handleDelete = (index) => {
    setArrCopy(arrCopy.filter((item, i) => i !== index))
  }

  console.log("hello");
  return (
    <>
          {arrCopy.map((item, index) => {
            <List onDelete={() => handleDelete(index)} item={item} />
          })}
    </>
  );
}

export default CheckBox;