import React, { Component } from 'react'
import Todo from './Todo'
import { ITodo } from '../interfaces/ITodo';

interface IState {
    todos: ITodo[]
}
export class TodoGrid extends Component<{}, IState> {
    state = {
        todos : [
            {title : "Bring groceries", isCompleted : false},
            {title : "Pay Bills", isCompleted : false},
            {title : "Send email to team", isCompleted : false},
            {title : "Get notes from John", isCompleted : false},
            {title : "Take medicines", isCompleted : false},
            {title : "Bring groceries", isCompleted : false},
            {title : "Pay Bills", isCompleted : false},
            {title : "Send email to team", isCompleted : false},
            {title : "Get notes from John", isCompleted : false},
            {title : "Take medicines", isCompleted : false}
        ]
    }

    private renderTodos = () => this.state.todos.map(todo => <Todo title={todo.title} isCompleted={todo.isCompleted} />);
    
    render() {
        return (
            <div className="container w-75 my-5 todo-list">
                {this.renderTodos()}
            </div>
        )
    }
}

export default TodoGrid
