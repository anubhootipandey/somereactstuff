import React, { useEffect, useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  // saving the todos to localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //adding todos
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  //deleting todos
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //sets the todo to complete
  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //editing the todos
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isEditing: true, editText: todo.text }
          : todo
      )
    );
  };

  // create input field to update the todos
  const handleEditChange = (id, newInput) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, editText: newInput } : todo
      )
    );
  };

  //after adding save the newInput to ul
  const saveTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, text: todo.editText, isEditing: false }
          : todo
      )
    );
  };

  return (
    <div className="flex justify-center mt-16">
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a Todo"
          className="p-3 border-b-2"
        />
        <button
          onClick={addTodo}
          className="px-10 py-3 bg-pink-500 text-white font-semibold"
        >
          Add
        </button>
      </div>
      <ul className="ml-4 shadow-lg text-center">
        {todos.map((todo) => (
          <li key={todo.id} className="px-4">
            {todo.isEditing ? (
              <input
                type="text"
                value={todo.editText}
                onChange={(e) => handleEditChange(todo.id, e.target.value)}
                className="px-4 border-b-2"
              />
            ) : (
              <span
                className="px-4"
                style={{ textDecoration: todo.completed ? "line-through" : "" }}
              >
                {todo.text}
              </span>
            )}
            <button
              onClick={() => completeTodo(todo.id)}
              className="p-2 m-2 border shadow-lg font-semibold text-green-600 mx-3"
            >
              Complete
            </button>
            {todo.isEditing ? (
              <button
                onClick={() => saveTodo(todo.id)}
                className="p-2 m-2 border shadow-lg font-semibold text-blue-600 mx-3"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => editTodo(todo.id)}
                className="p-2 m-2 border shadow-lg font-semibold text-orange-600 mx-3"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => deleteTodo(todo.id)}
              className="p-2 m-2 border shadow-lg font-semibold text-red-600 mx-3"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
