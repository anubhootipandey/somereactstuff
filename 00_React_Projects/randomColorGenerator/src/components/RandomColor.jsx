import React, { useState } from 'react';

const RandomColor = () => {
    const [randomColor, setRandomColor] = useState("#000000");

    const randomColorGenerator = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        const color = `rgb(${red}, ${green}, ${blue})`;

        setRandomColor(color);
    }

  return (
    <div style={{display: "flex", alignItems: 'center', flexDirection: 'column'}}>
        <div style={{backgroundColor: randomColor, width: '500px', height: '500px', margin: '20px auto'}}></div>
        <button style={{padding: '10px', width: '500px', backgroundColor: 'slateblue', outline: 'none', border: 'none', color: '#fff'}} onClick={() => randomColorGenerator()}>Generate Random Color</button>
    </div>
  )
}

export default RandomColor;