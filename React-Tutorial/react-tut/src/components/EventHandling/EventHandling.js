import React from 'react';

const EventHandling = () => {

    const displayData = () => {
        alert("Hello!");
    }

    let addData = (a, b) => {
        console.log("a + b is ", a + b);
    }

  return (
    <div style={{margin: "200px", backgroundColor: "black", width: "300px", height: "100px", padding: "20px"}}>
        <button style={{padding: "10px", border: "none", backgroundColor: "#fff"}} onClick={() => addData(20, 26)}>Add Data</button>
        <button style={{padding: "10px", border: "none", backgroundColor: "lightgreen"}} onClick={displayData}>Save</button>
    </div>
  )
}

export default EventHandling;