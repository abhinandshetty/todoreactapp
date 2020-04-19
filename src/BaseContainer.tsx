import React, { useState } from 'react';
import TodoGrid from './components/TodoGrid';
import AddTodo from './components/AddTodo';


function BaseContainer() {
  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => setOpen(!isOpen);

  return (
    <>
      <div className="container m-auto responsive-container">
        <button className="add-btn mt-5 mb-3" onClick={toggleModal}>Add Todo</button>
      </div>
      <div className="container m-auto base-conatainer responsive-container">
        <div className="row">
          <TodoGrid />
        </div>
      </div>
      <AddTodo isOpen={isOpen} onHide={toggleModal} />
    </>
  );
}

export default BaseContainer;
