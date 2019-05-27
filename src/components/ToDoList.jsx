import React, { Component } from 'react';
import ToDo from './ToDo.jsx';
class ToDoList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map(todo => 
                        <ToDo key={todo.id} {...todo}></ToDo>    
                    )
                }
            </ul>
        )
    }
}
export default ToDoList