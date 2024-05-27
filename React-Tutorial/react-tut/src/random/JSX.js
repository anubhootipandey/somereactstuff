import React from 'react';

const JSX = () => {
  const value = 45;
  const arr = [1, 2, 3, 4, 5, 6, 8, 4];
  const obj = {
    name: "Marie",
    age: 20,
    gender: "female"
  }
  let status = true;

  return (
    <div style={{margin: "30px auto", textAlign: "center", width: "500px"}}>
      <div>
        <h1>JSX Tutorial</h1>
      </div>
      <div style={{backgroundColor: "violet", padding: "20px"}}>{value}</div>
      <div style={{backgroundColor: "pink", padding: "20px"}}>
        {arr.map(num => {
          return <div>{(num*num) - num + 1}</div>
        })}
      </div>
      <div style={{backgroundColor: "lightgreen", padding: "20px"}}>
        <div>{obj.name}</div>
        <div>{obj.age}</div>
        <div>{obj.gender}</div>
      </div>
      <div>
        {status ? <div style={{color: "slateblue", backgroundColor: "lightblue", padding: "20px", fontSize: "1.5rem"}}>Hello, World!</div> : <div>Oh No! Your status is false.</div>}
      </div>
    </div>
  )
}

export default JSX;