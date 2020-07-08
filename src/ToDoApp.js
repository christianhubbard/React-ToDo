import React, { Component } from 'react'
import ToDoList from './ToDoList';
import NewToDoForm from './NewToDoForm.js';
import './App.css'

export default class ToDoApp extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>To do List!~</h1>
                    <h5>A simple React to do application</h5>
                </div>
                <div>
                    <ToDoList />
                </div>
                <div>
                    <NewToDoForm />
                </div>
            </div>
        )
    }
}
