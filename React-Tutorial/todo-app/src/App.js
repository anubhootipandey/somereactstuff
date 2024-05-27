import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [completed, setCompleted] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tname = e.target.tname.value;

    if(tname === ""){
      alert("Todo cannot be empty!");
      return;
    }

    if (!todo.includes(tname)) {
      const todos = [...todo, tname];
      setTodo(todos);
      e.target.reset();
    } else {
      alert("Todo already exist!");
    }
  };

  const deleteTodo = (indexToDelete) => {
    const filteredTodos = todo.filter((_, index) => index !== indexToDelete);
    setTodo(filteredTodos);
    setCompleted(completed.filter(index => index !== indexToDelete));
  };

  const toggleComplete = (index) => {
    if(completed.includes(index)){
      setCompleted(completed.filter(i => i !== index));
    } else{
      setCompleted([...completed, index]);
    }
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="tname" placeholder="Enter your todos..." />
        <button>Add</button>
      </form>

      <div className="result">
        {todo.map((value, index) => {
          return (
            <ul key={index}>
              <li onClick={() => toggleComplete(index)} style={{textDecoration: completed.includes(index) ? "line-through" : "none"}}>
                {value} <span onClick={() => deleteTodo(index)}>&times;</span>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default App;
