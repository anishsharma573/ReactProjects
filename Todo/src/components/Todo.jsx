import React, { useContext } from 'react';
import { REMOVE_TODO } from '../context/action.types';
import { TodoContext } from '../context/TodoContext';

const Todo = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="flex justify-between items-center p-2 border-b">
            {todo.todoString}
            <button
              onClick={() => dispatch({ type: REMOVE_TODO, payload: todo.id })}
              className="bg-red-500 text-white p-1 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
