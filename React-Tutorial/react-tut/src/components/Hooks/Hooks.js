import React, { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [pshow, setPshow] = useState(false);
  let temp = " ";

  if(pshow){
    temp = 
    <>
    <button style={{backgroundColor: "green", color: "white", border: "none", padding: "10px", margin: "10px"}} onClick={() => setPshow(!pshow)}>Hide</button>
    <h1>Welcome to my World!</h1>
    </>
  } else{
    temp = <button style={{backgroundColor: "purple", color: "white", border: "none", padding: "10px", margin: "10px"}} onClick={() => setPshow(!pshow)}>Show</button>;
  }

  const displayData = () => {
    setCount(count + 1);
  };

  const addData = (a, b) => {
    console.log(a + b);
  };

  return (
    <div>
        <div style={{color: "blue"}}>{temp}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontWeight: "bold",
          fontSize: "2rem",
          textAlign: "center",
          margin: "50px",
          color: "white",
          backgroundColor: "teal",
          width: "300px",
          height: "100px",
          padding: "50px",
        }}
      >
        {count}
        <button
          style={{
            padding: "10px",
            border: "none",
            fontWeight: "bold",
            fontSize: "1rem",
            color: "teal",
            backgroundColor: "#fff",
          }}
          onClick={() => addData(20, 26)}
        >
          Add Data
        </button>
        <button
          style={{
            padding: "10px",
            border: "none",
            fontWeight: "bold",
            fontSize: "1rem",
            color: "teal",
            backgroundColor: "lightgreen",
          }}
          onClick={displayData}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Hooks;
