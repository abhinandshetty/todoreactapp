import React, { Component } from 'react'
import { ITodo } from '../interfaces/ITodo'

export class Todo extends Component<ITodo,ITodo> {
    state = {
        title: '',
        isCompleted : false
    }
    
    componentDidMount() : void {
        this.setState({title: this.props.title, isCompleted: this.props.isCompleted});
    }

    private onChangeCheckBox = () : void => {
        this.setState({isCompleted : !this.state.isCompleted})
    }

    render() {
        return (
            <div className={`row todo-low my-3 mx-2 py-3 px-4 todo  ${this.state.isCompleted ? "completed-todo" : ""}`}>
                <div className={`col-10`}>
                    {this.state.title}
                </div>

                <div className="col-2">
                    <input type="checkbox" onClick={this.onChangeCheckBox} className="custom-checkbox grid-cb mt-1" checked={this.state.isCompleted}/>
                </div>
            </div>
        )
    }
}

export default Todo
