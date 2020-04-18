import React from 'react';
import TodoForm from './components/TodoForm';
import TodoGrid from './components/TodoGrid';


function BaseContainer() {
  return (
    <>
      <div className="container m-auto">
        <button className="add-btn mt-5 mb-3">Add Todo</button>
      </div>
      <div className="container m-auto base-conatainer">
          <TodoGrid />
      </div>
    </>
  );
}

export default BaseContainer;
