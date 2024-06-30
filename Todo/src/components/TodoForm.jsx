import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from '../context/TodoContext';
import { ADD_TODO } from '../context/action.types';

const TodoForm = () => {
  const [todoString, setTodoString] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (todoString === '') {
      return alert('Please enter a Todo');
    }
    const todo = {
      todoString,
      id: uuidv4()
    };
    dispatch({
      type: ADD_TODO,
      payload: todo
    });
    setTodoString('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Your next Todo"
        value={todoString}
        onChange={e => setTodoString(e.target.value)}
        className="border p-2 flex-1"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded"
      >
        ADD
      </button>
    </form>
  );
};

export default TodoForm;
