import React, { useState } from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        setTodos([...todos, input]);
        setInput('');
    }

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

  return (
    <div>
        <h1>Todo List</h1>
        <input 
        type='text'
        placeholder='Enter your todos'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => removeTodo(index)}>Remove</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo;