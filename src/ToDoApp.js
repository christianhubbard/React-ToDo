import React, { Component } from 'react'
import ToDoListItem from './ToDoListItem';
import NewToDoForm from './NewToDoForm.js';
import uuid from 'uuid/dist/v4';
import './App.css';

export default class ToDoApp extends Component {
    static defaultProps = {

    }
    constructor(props){
        super(props)
        this.state = {
            todos: ["buy grapes"]
        }
        this.addDataToState = this.addDataToState.bind(this);
    }
    addDataToState(data){
        this.setState(oldState => ({todos: [...oldState.todos, data]}))
    }
    render() {
        return (
            <div>
                <div>
                    <h2>To do List!~</h2>
                    <p>A simple React to do application</p>
                </div>
                <div>
                    {this.state.todos.map(todo => {
                        let key = uuid();
                        return <ToDoListItem key={key} id={key} listItem={todo} />
                    })}
                </div>
                <div>
                    <NewToDoForm key={uuid()} addDataToHigherState={this.addDataToState}/>
                </div>
            </div>
        )
    }
}
