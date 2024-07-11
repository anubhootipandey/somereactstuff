import React, {  useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     setCount(count + 1);
    //     // console.log(count);
    // }, []);//because of empty dependency array it will render only once.
  
    // useEffect(() => {
    //     setCount(count + 1);
    // }, []);

    // return (
    // <div>{count}</div>//---> 1

    let timer;
    const handleClick = () => {
        setCount(count + 1);
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            alert(count);
        }, 3000); //settimeout returns the numeric identifier, 0, 1, 2, etc.
    }

    return(
        <div>
            <button onClick={handleClick}>Click me</button>
            <h1>{count}</h1>
        </div>
    )
}

export default Counter;