import React, { useState, useEffect, useRef } from 'react';
import AddTodo from './components/AddTodo';
import { ITodo } from './interfaces/ITodo';
import Todo from './components/Todo';


function BaseContainer() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [todos, setTodos] = useState<ITodo[]>([]);

  const buttonRef = useRef<HTMLButtonElement>(null);


  useEffect(() => {
    console.log(buttonRef);
    document.activeElement && (document.activeElement as HTMLElement).blur()
    },[isOpen, todos]);

  const toggleModal = () : void => setOpen(!isOpen);

  const onAddTodo = (todo: ITodo, callback = () => {}): void => {
    todos.unshift(todo);
    sortTodos(todos);
    callback();
  }

  const changeTodoStatus = (todo: ITodo, isCompleted: boolean): void => {
    todos.unshift({...(todos.splice(todos.indexOf(todo),1)[0]),isCompleted});
    sortTodos(todos);
  }

  const sortTodos = (todos: ITodo[]) => setTodos(() => ([...(todos.filter(e=>!e.isCompleted)), ...(todos.filter(e=>e.isCompleted))]));


  const renderTodos = (): JSX.Element[] => todos.map((todo, index) => <Todo key={index} todo={todo} onChangeTodoStatus={changeTodoStatus} />);

  return (
    <>
      <div className="container m-auto responsive-container">
        <button className="add-btn mt-5 mb-3" onClick={toggleModal} ref={buttonRef}>Add Todo</button>
      </div>
      <div className="container m-auto base-conatainer responsive-container">
        <div className="row">
          <div className="container my-5 todo-list">
            {todos.length ?  renderTodos() : <h5 style={{height: "100px", color: 'darkgray'}} className="mx-5">Click on Add Todo and get started!</h5>}
          </div>
        </div>
      </div>
      <AddTodo isOpen={isOpen} onHide={toggleModal} onAddTodo={onAddTodo} />
    </>
  );
}

export default BaseContainer;
