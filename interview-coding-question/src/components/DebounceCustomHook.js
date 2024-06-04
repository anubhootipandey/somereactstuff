/*

in case where you are working with a value that updates frequently, such as a text input

Create a custom hook useDebounce() that allows you to debounce such values,

Here's how you can implement it:

function App(){
    const [value, setValue] = useState(...) //Assume this value updates often
    const debouncedValue = useDebounce(value, 1000); //Value is debounced with a delay of 1
}

This setup ensures that debounceValue only updates after 1000 milliseconds have passed
    
*/

import React, { useState } from 'react';

const DebounceCustomHook = () => {
    const [text, setText] = useState('');
    
  return (
    <div>
        <h2>Debounce Hook Tester</h2>
        <input type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Type something...'
        />

        <p>Debounce Value : </p>
    </div>
  )
}

export default DebounceCustomHook;