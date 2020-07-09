import React, { Component } from 'react'
import './App.css'


export default class ToDoListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditing:false,
        }
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove(e){
        this.props.removeItemFromList(this.props.listItem)
    }
    render() {
        return (
            <div className="App-todoItem">
                <p>{this.props.listItem}</p>
                <div>
                    <button>edit</button>
                    <button onClick={this.handleRemove}>X</button>
                </div>
            </div>
        )
    }
}
