import React, { useState } from 'react';

const Counter = () => {
    const [num, setNum] = useState(0);

    const onIncrement = () => {
        setNum(num+1);
    }

    const onDecrement = () => {
        if(num > 0){
            setNum(num-1);
        } else{
            setNum(0);
        }
    };

  return (
    <div>
        <div className='main'>
            <h1>{num}</h1>
            <div className='btn'>
                <button onClick={onIncrement}>Increment</button>
                <button onClick={onDecrement}>Decrement</button>
            </div>
        </div>
    </div>
  )
}

export default Counter;