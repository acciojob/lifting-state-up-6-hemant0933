import React from 'react';

const Child = ({ todos, onCompleteTodo }) => {
  return (
    <div className="child">
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            {!todo.completed && (
              <button onClick={() => onCompleteTodo(todo.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Child;
