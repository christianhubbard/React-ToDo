import React, { Component } from 'react'
import ToDoListItem from './ToDoListItem';
import NewToDoForm from './NewToDoForm.js';
import './TodoList.css';

export default class ToDoApp extends Component {
    constructor(props){
        super(props)
        this.state = {todos: []}
        this.addDataToState = this.addDataToState.bind(this);
        this.removeItemFromList = this.removeItemFromList.bind(this);
        this.updateToDo = this.updateToDo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
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
        const updatedToDos = this.state.todos.map(todo => {
            if(todo.id === id){
                return { ...todo, task: updatedTask }
            }
            return todo;
        });
        this.setState({ todos:updatedToDos })
    }
    toggleCompletion(id){
        const updatedToDos = this.state.todos.map(todo => {
            if(todo.id === id){
                return { ...todo, completed: !todo.completed}
            }
            return todo;
        });
        this.setState({ todos:updatedToDos })
        
    }
    render() {
        const todos = this.state.todos.map(todo => {
            return <ToDoListItem key={todo.id} id={todo.id} task={todo.task} removeItemFromList={this.removeItemFromList} toggleToDo={this.toggleCompletion} completed={todo.completed} updateToDo={this.updateToDo}/>
        });
        return (
            <div className="TodoList">
                <h1>To do List!~ <span>A simple React to do application.</span></h1>
                <NewToDoForm key={"newtodoformkey"} addDataToHigherState={this.addDataToState}/>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}
