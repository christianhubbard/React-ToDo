import React, { Component } from 'react'

export default class NewToDoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            newToDo:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(){
        
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="newToDo">New Todo</label>
                    <div>
                        <input id="newToDo" name="newToDo" value={this.state.newToDo} onChange={this.handleChange}></input>
                        <button>ADD TODO</button>
                    </div>
                </form>
            </div>
        )
    }
}
