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
    }
    handleRemove(e){
        this.props.removeItemFromList(this.props.listItem)
    }
    handleEdit(){
        this.setState({isEditing: !this.state.isEditing, newItem:""})
    }
    render() {
        if(this.state.isEditing){
            return(
                <form>
                    <input value={this.state.newItem}></input>
                    <button onClick={this.handleRemove}>Submit</button>
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
