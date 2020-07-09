import React, { Component } from 'react'
import './App.css'


export default class ToDoListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditing:false,
        }
    }
    render() {
        return (
            <div className="App-todoItem">
                <p>{this.props.listItem}</p>
                <div>
                    <button>edit</button>
                    <button>X</button>
                </div>
            </div>
        )
    }
}
