import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import { ITodo } from '../interfaces/ITodo';

interface IAddTodoProps {
    isOpen: boolean,
    onHide: () => void,
    onAddTodo: (todo : ITodo, callback: ()=>void) => void
}

export class AddTodo extends Component<IAddTodoProps, ITodo> {

    state = {
        id: null,
        title: '',
        isCompleted: false
    }

    private onAddTodo = (event: React.SyntheticEvent) => {
        event.preventDefault();
        this.setState({...this.state, id: Date.now()},()=> this.props.onAddTodo(this.state, () =>{
            this.setState({title: '', isCompleted: false}, () => this.props.onHide());
        }));
    }

    private onChangeField = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.currentTarget;
        this.setState({ [name]: name==='isCompleted' ? checked : value } as unknown as Pick<ITodo, keyof ITodo>)
    }

    render() {
        return (
            <Modal
                show={this.props.isOpen}
                onHide={this.props.onHide}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                <Modal.Header closeButton className="todo-low border-0">
                    <Modal.Title id="contained-modal-title-vcenter" className="h6">
                        Create Todo
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="container m-1" onSubmit={this.onAddTodo} autoComplete="off">
                        <div className="row form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="title" className="form-control input" value={this.state.title} onChange={this.onChangeField} placeholder="Title"/>
                        </div>
                        <div className="row form-group">
                            <label htmlFor="isCompleted"><input className="custom-checkbox form-cb input mr-2" type="checkbox" id="isCompleted" name="isCompleted" onChange={this.onChangeField} checked={this.state.isCompleted}/>Is Completed</label>
                        </div>

                        <button className="add-btn float-right" onClick={this.onAddTodo}>Submit</button>

                    </form>
                </Modal.Body>
            </Modal>
        )
    }
}

export default AddTodo
