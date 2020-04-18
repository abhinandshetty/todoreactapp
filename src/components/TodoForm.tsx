import React, { Component } from 'react'

interface IState {
    title: String,
    description?: String,
    isCompleted: boolean | null
}

interface IProps { }

export class TodoForm extends Component<IProps, IState> {

    state: IState = {
        title: "",
        description: "",
        isCompleted: false
    }


    private onChangeField = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value } as unknown as Pick<IState, keyof IState>)
    }

    private onSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form className="m-auto w-50" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" className="form-control" onChange={this.onChangeField} />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" className="form-control" onChange={this.onChangeField} />
                </div>

                <div className="form-group checkbox">
                    <label htmlFor="isCompleted"><input className="mr-2" type="checkbox" id="isCompleted" name="isCompleted" onChange={this.onChangeField} />Is Completed</label>
                </div>

                <button className="btn btn-success" type="submit">Submit</button>
            </form>
        )
    }
}

export default TodoForm
