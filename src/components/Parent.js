import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Deploy the React app', completed: false },
  ]);

  const handleCompleteTodo = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <Child todos={todos} onCompleteTodo={handleCompleteTodo} />
    </div>
  );
};

export default Parent;
