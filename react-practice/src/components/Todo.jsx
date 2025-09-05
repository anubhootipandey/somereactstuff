import React, { useState } from "react";
import { useEffect } from "react";

const Todo = () => {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });
    const [input, setInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editVal, setEditVal] = useState('');
    const [serachTerm, setSearchTerm] = useState('');

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);

    const addTodo = (e) => {
        e.preventDefault();
        if(input.trim() === "") return;

        setTodos([...todos, {text: input, completed: false}]);
        setInput('');
    }

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

    const editTodo = (index) => {
        setEditIndex(index);
        setEditVal(todos[index].text);
    }

    const saveTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].text = editVal;
        setTodos(updatedTodos);
        setEditIndex(null);
        setEditVal('');
    }

    const toggleCompleted = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    }

    const filteredTodos = todos.filter((todo => todo.text.toLowerCase().includes(serachTerm.toLowerCase())));

    return (
        <div>
            <form>
               <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add you todos..." />
               <button onClick={addTodo}>Add</button>
            </form>

            <input type="text" value={serachTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search todos..." style={{margin: "1rem"}} />

            <div>
                {filteredTodos.map((todo, index) => (
                    <ul key={index}>
                        <li style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                            <input type="checkbox" checked={todo.completed} onChange={() => toggleCompleted(index)} />
                            {
                                editIndex === index ? (
                                    <input type="text" value={editVal} onChange={(e) => setEditVal(e.target.value)} />
                                ) : (
                                    todo.text
                                )
                            }
                        </li>
                        {editIndex === index ? (
                            <button onClick={() => saveTodo(index)}>Save</button>
                    
                        ) : (
                            <button onClick={() => editTodo(index)}>Edit</button>
                        )}
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                        </ul>
                ))}
                
            </div>
        </div>
    );
};

export default Todo;