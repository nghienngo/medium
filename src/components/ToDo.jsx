import React, { Component } from 'react';
class ToDo extends Component{
    render(){
        return (
            <li>
                {this.props.text}
            </li>
        )
    }
}
export default ToDo