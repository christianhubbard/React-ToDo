import React, { Component } from 'react'
import ToDoList from './ToDoList';
import NewToDoForm from './NewToDoForm.js';
import './App.css'

export default class ToDoApp extends Component {
    static defaultProps = {

    }
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div>
                    <h2>To do List!~</h2>
                    <p>A simple React to do application</p>
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
