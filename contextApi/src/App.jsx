import React from 'react';
import context from './context';
import Provider from './Provider';

const App = () => {

  const Agent = () => {
    return <AgentOne />;
  };

  const AgentOne = () => {
    return <AgentTwo />;
  };

  const AgentTwo = () => {
    return <AgentBond />;
  };

  const AgentBond = () => {
    return (
      <context.Consumer>
        {(context) => (
          <div className='flex flex-col items-center justify-center my-16 gap-5 text-white shadow-lg p-20 rounded-lg bg-gray-800'>
            <h1 className='text-3xl font-semibold'>Name: {context.data.name}</h1>
            <h3 className='text-2xl font-medium'>Age: {context.data.age}</h3>
            <h2 className='text-xl font-normal'>Is Accepted: {context.data.isMissionAccepted}</h2>
            <button 
              className='mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300'
              onClick={context.Accepted}
            >
              Click to Accept
            </button>
            <button 
              className='mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300'
              onClick={context.NotAccepted}
            >
              Click to Not  Accept
            </button>
          </div>
        )}
      </context.Consumer>
    );
  };

  return (
    <div className='h-screen bg-gray-900 flex flex-col items-center justify-center'>
      <Provider>
        <h1 className='text-4xl text-white mb-10'>Mission Information</h1>
        <Agent />
      </Provider>
    </div>
  );
};

export default App;
