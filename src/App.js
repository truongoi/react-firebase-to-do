import React from 'react';
import ToDo from './components/ToDo/ToDo';

function App() {
  return (
    <div className="container bg-gray-200 mx-auto px-4 py-8 items-center box-border">
      <h1 className="bold">To-do List</h1>
      <ToDo />
    </div>
  );
}

export default App;
