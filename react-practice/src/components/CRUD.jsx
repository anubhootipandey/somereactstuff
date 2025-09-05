import React, { useEffect, useState } from 'react';

const CRUD = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });
    const [edit, setEdit] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (e) => {
        e.preventDefault();
        if(input.trim() === "") return;

        if(edit !== null){
            const newTodos = [...todos];
            newTodos[edit].text = input.trim();
            setTodos(newTodos);
            setEdit(null);
        } else {
            setTodos([...todos, {id : Date.now(), text : input.trim()}]);
        }
        setInput('');
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, id) => id !== index);
        setTodos(newTodos);
    }

    const editTodo = (index) => {
        setInput(todos[index].text);
        setEdit(index);
    }

    const filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchTerm.toLowerCase()));

    const toggleComplete = (index) => {
        const updateTodos = [...todos];
        updateTodos[index].completed = !updateTodos[index].completed;
        setTodos(updateTodos);
    }

  return (
    <div>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Add your tasks...' />
        <button type='submit' onClick={addTodo}>
            {edit !== null ? "Update" : "Add"}
        </button>

        <div>
            <input type="text" placeholder='Search here...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

        {filteredTodos.map((todo, index) => (
            <ul key={index}>
                
                <li style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</li>
                <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(index)} />
                <div>
                    <button onClick={() => editTodo(index)}>Edit</button>
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                </div>
            </ul>
        ))}
    </div>
  )
};

export default CRUD;