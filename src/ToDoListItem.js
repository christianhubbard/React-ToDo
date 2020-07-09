import React, { Component } from 'react'
import './Todo.css'


export default class ToDoListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditing:false,
            task: this.props.task,
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleRemove(e){
        this.props.removeItemFromList(this.props.id)
    }
    handleEdit(){
        this.setState({isEditing: !this.state.isEditing})
    }
    handleChange(e){
        this.setState({isEditing:true, [e.target.name]: e.target.value})
    }
    handleUpdate(e){
        e.preventDefault()
        this.props.updateToDo(this.props.id, this.state.task)
        this.setState({isEditing:false})
    }
    handleToggle(){
        this.props.toggleToDo(this.props.id);
    }
    render() {
  
        let result;
        if(this.state.isEditing){
            result = (
                <div className="Todo">
                <form onSubmit={this.handleUpdate}>
                    <input name="task" id={this.props.id} onChange={this.handleChange} value={this.state.task}></input>
                    <button>Save</button>
                </form>
                </div>
            )
        } else {
            result = (
                <div className='Todo'>
                    <li className={this.props.completed ? 'Todo-task completed' : 'Todo-task'} onClick={this.handleToggle}>
                        {this.props.task}
                    </li>
                    <div className='Todo-buttons'>
                        <button onClick={this.handleEdit}><i class='fas fa-pen' /></button>
                        <button onClick={this.handleRemove}><i class='fas fa-trash' /></button>
                    </div>
                </div>
            )
        }
        
        return (result);
    }
}
