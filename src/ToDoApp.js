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
        this.removeItemFromList = this.removeItemFromList.bind(this);
    }
    addDataToState(data){
        this.setState(oldState => ({todos: [...oldState.todos, data]}))
    }
    removeItemFromList(id){
        console.log("this is the ID", id)
        this.setState(oldState => ({todos: oldState.todos.filter(element => element !== id)}))
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
                        return <ToDoListItem key={key} id={key} listItem={todo} removeItemFromList={this.removeItemFromList}/>
                    })}
                </div>
                <div>
                    <NewToDoForm key={uuid()} addDataToHigherState={this.addDataToState}/>
                </div>
            </div>
        )
    }
}
