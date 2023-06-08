import React from 'react';
import Home from './components/Home';

const App = () => {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

const Card = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white hover:bg-sky-100 rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  )
}

export default App;
