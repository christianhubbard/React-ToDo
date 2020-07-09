import React, { Component } from 'react'
import './App.css'


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
    render() {
  
        let result;
        if(this.state.isEditing){
            result = (
                <form onSubmit={this.handleUpdate}>
                    <input name="task" id={this.props.id} onChange={this.handleChange} value={this.state.task}></input>
                    <button>Save</button>
                </form>
            )
        } else {
            result = (
                <div className="App-todoItem">
                    <li>{this.props.task}</li>
                    <div>
                        <button onClick={this.handleEdit}>edit</button>
                        <button onClick={this.handleRemove}>X</button>
                    </div>
                </div>
            )
        }
        
        return (result);
    }
}
