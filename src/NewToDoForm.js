import React, { Component } from 'react';
import uuid from 'uuid/dist/v4';
import './NewToDoForm.css'

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
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input 
                id="task" 
                name="task" 
                placeholder="New Todo" 
                type="text" 
                value={this.state.task} 
                onChange={this.handleChange} />
                <button>ADD TODO</button>
            </form>
        )
    }
}
