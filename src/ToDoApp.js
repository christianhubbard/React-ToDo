import React, { Component } from 'react'
import ToDoListItem from './ToDoListItem';
import NewToDoForm from './NewToDoForm.js';
import uuid from 'uuid/dist/v4';
import './App.css';

export default class ToDoApp extends Component {
    constructor(props){
        super(props)
        this.state = {todos: []}
        this.addDataToState = this.addDataToState.bind(this);
        this.removeItemFromList = this.removeItemFromList.bind(this);
        this.updateToDo = this.updateToDo.bind(this);
    }
    addDataToState(data){
        this.setState({
            todos: [...this.state.todos, data]
        });
    }
    removeItemFromList(id){
        this.setState(oldState => ({todos: oldState.todos.filter(todo => todo.id !== id)}))
    }
    updateToDo(id, updatedTask){
        console.log("id", id)

        const updatedToDos = this.state.todos.map(todo => {
            console.log("todo.id",todo.id)
            if(todo.id === id){
                return { ...todo, task: updatedTask }
            }
            return todo;
        });
        this.setState({ todos:updatedToDos })
    }
    render() {
        const todos = this.state.todos.map(todo => {
            return <ToDoListItem key={todo.id} id={todo.id} task={todo.task} removeItemFromList={this.removeItemFromList}  updateToDo={this.updateToDo}/>
        });
        return (
            <div>
                <div>
                    <h2>To do List!~</h2>
                    <p>A simple React to do application</p>
                </div>
                <ul>
                    {todos}
                </ul>
                <div>
                    <NewToDoForm key={uuid()} addDataToHigherState={this.addDataToState}/>
                </div>
            </div>
        )
    }
}
