import React, { Component } from 'react'
import { ITodo } from '../interfaces/ITodo'

export class Todo extends Component<{todo: ITodo, onChangeTodoStatus: (todo: ITodo, status: boolean)=>void}, {}> {
    render() {
        const {todo, onChangeTodoStatus } = this.props;
        return (
            <div className={`row todo-low my-3 mx-2 py-3 px-4 todo  ${todo.isCompleted ? "completed-todo" : ""}`}>
                <div className={`col-10`}>
                    {todo.title}
                </div>

                <div className="col-2">
                    <input type="checkbox" onChange={(event: React.SyntheticEvent<HTMLInputElement>)=> onChangeTodoStatus(todo, event.currentTarget.checked)} className="custom-checkbox grid-cb mt-1" checked={todo.isCompleted}/>
                </div>
            </div>
        )
    }
}

export default Todo
