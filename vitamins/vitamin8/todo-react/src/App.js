import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { connect } from "react-redux";
import TaskForm from './components/TaskForm.js'
import TaskList from './components/TaskList.js'

const App = ({ todos, addTodo, removeTodo, toggleTodo }) => {
  return (
    <div id="app">
      <h1>To-Do List</h1>
      <TaskForm addTodo={addTodo} />
      <TaskList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) =>
    dispatch({
      type: "ADD_TODO",
      payload: todo
    }),
  removeTodo: (id) =>
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    }),
  toggleTodo: (id) =>
    dispatch({
      type: "TOGGLE_TODO",
      payload: id
    }),
});

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default connect
  (mapStateToProps, mapDispatchToProps)(App);
