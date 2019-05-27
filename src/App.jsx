import React, { Component } from 'react';
import './scss/App.scss';
import { connect } from 'react-redux';
import { addToDo } from './actions/actions.js';
import AddToDo from './components/AddToDo.jsx';
import ToDoList from './components/ToDoList.jsx';

class App extends Component {
  render() {
    const { dispatch, visibleTodos } = this.props;
    return (
      <div className="App" >
        <AddToDo onAddClick={text => dispatch(addToDo(text))}></AddToDo>
        <ToDoList todos={visibleTodos}></ToDoList>
        <button className="button is-danger is-outline">Bulma</button>
      </div>
    );
  }
}
function select(state) {
  return {
    visibleTodos: state.todos
  }
}

export default connect(select)(App);
