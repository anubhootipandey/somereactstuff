import React, { useEffect, useState } from 'react';

const RandomColor = () => {
    const [color, setColor] = useState();
    const [answers, setAnswers] = useState([]);

    const getRandomColor = () => {
        const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        
        const color = new Array(6)
        .fill("")
        .map(() => digits[Math.floor[Math.random() * digits.length]])
        .join("");
        
        return `#${color}`;
    }

    useEffect(() => {
        //generate random color
        const actualColor = getRandomColor();
        setColor(actualColor);
        setAnswers([actualColor, getRandomColor(), getRandomColor()].sort(
            () => 0.5 - Math.random()));
    }, [])

  return (
    <div>
        <div className="guess-me" style={{ background: color }}></div>

        {answers.map((answer) => (
            <button key={answer}>{answer}</button>
        ))}
    </div>
  )
}

export default RandomColor;