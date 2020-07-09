import React, { Component } from 'react'
import './App.css'


export default class ToDoListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditing:false,
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleRemove(e){
        this.props.removeItemFromList(this.props.listItem)
    }
    handleEdit(){
        this.setState({isEditing: !this.state.isEditing, newItem:""})
    }
    handleChange(e){
        this.setState({isEditing:true, [e.target.name]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault()
        this.props.removeItemFromList(this.props.listItem)
        this.props.addDataToHigherState(this.state.newItem)
    }
    render() {
        if(this.state.isEditing){
            return(
                <form onSubmit={this.handleSubmit}>
                    <input name="newItem" onChange={this.handleChange} value={this.state.newItem}></input>
                    <button>Submit</button>
                </form>
            )
        } else return (
            <div className="App-todoItem">
                <p>{this.props.listItem}</p>
                <div>
                    <button onClick={this.handleEdit}>edit</button>
                    <button onClick={this.handleRemove}>X</button>
                </div>
            </div>
        )
    }
}
