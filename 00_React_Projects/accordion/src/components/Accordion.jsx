import React, { useState } from 'react';

const Accordion = () => {
    const [open, setOpen] = useState(null);

    const questions = [
        {
          id: 1,
          title: "What is React?",
          content: "React is like a supercharged toolbox for building user interfaces on the web. It's a JavaScript library that helps you create interactive and dynamic UI components for your websites or web applications."
        },
        {
          id: 2,
          title: "What is JSX?",
          content: "JSX (JavaScript XML) is like a special language that lets you write HTML-like code directly within your JavaScript. It's a syntax extension that makes it easier and more intuitive to create user interfaces in React."
        },
        {
          id: 3,
          title: "What is the difference between state and props?",
          content: "Both props and state are plain JavaScript objects. While both hold information that influences the output of render, they are different in their functionality with respect to components. Props get passed to the component similar to function parameters, whereas the state is managed within the component similar to variables declared within a function."
        },
        {
          id: 4,
          title: "What are controlled components in React?",
          content: "Controlled components are components where the form data is controlled by React state. The input elements receive their current value from state and have their value updated through a callback function."
        }
      ];

      const handleClick = (id) => {
        setOpen(open === id ? null : id);
      };
    
  return (
    <div>
        {questions.map(question => (
            <div key={question.id}>
                <div style={{width: '500px', backgroundColor: '#000', cursor: 'pointer', padding: '10px', margin: '5px 0'}} onClick={() => handleClick(question.id)}>{question.title}</div>
                {open === question.id && (
                    <div style={{width: '500px', padding: '10px', border: '1px solid #ccc'}}>{question.content}</div>
                )}
            </div>
        ))}
    </div>
  );
};

export default Accordion;