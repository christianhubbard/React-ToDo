import React, { Component } from 'react';
import uuid from 'uuid/dist/v4';

export default class NewToDoForm extends Component {
    constructor(props){
        super(props)
        this.state = {task: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addDataToHigherState({...this.state, id: uuid(), completed: false})
        this.setState({task:""})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input 
                id="task" 
                name="task" 
                placeholder="New ToDo" 
                type="text" 
                value={this.state.task} 
                onChange={this.handleChange} />
                <button>ADD TODO</button>
            </form>
        )
    }
}
