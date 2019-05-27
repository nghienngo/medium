import React, { Component } from 'react';
class AddToDo extends Component {
    render() {
        return (
            <div>
                <input className="input is-primary" type='text' ref='input' />

                <button className="button is-primary" onClick={(e) => this.handleClick(e)}>
                    Add
                </button>
            </div>
        )
    }
    handleClick(e) {
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }
}
export default AddToDo;