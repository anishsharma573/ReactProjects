import React, { useReducer } from 'react';
import todoReducer from './context/reducer';
import { TodoContext } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <div className="container mx-auto p-4 flex justify-center content-center flex-col items-center ">
        <h1 className="text-2xl font-bold mb-4">Todo App with Context API</h1>
        <Todo />
       <div className='mt-[300px]'>
   
       <TodoForm />
       </div>
      </div>
    </TodoContext.Provider>
  );
};

export default App;
