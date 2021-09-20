import React, { Component } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    const fetchFromLocal = JSON.parse(localStorage.getItem("todos"));
    const todos = fetchFromLocal !== null ? fetchFromLocal : [];
    this.state = { todo: todos, input: "" };
  }

  saveToLocal() {
    const local = this.state.todo;
    localStorage.setItem("todos", JSON.stringify(local));
  }

  setInputHandler = (text) => {
    const input = text;
    this.setState({ input }, this.saveToLocal);
  };

  onCompleteHandler = (key) => {
    window.navigator.vibrate(100);
    const todo = [...this.state.todo].map((item) => {
      if (item.key === key) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    this.setState({ todo }, this.saveToLocal);
  };

  onAddHandler = () => {
    window.navigator.vibrate(100);
    const todo = [...this.state.todo];
    todo.push({
      name: this.state.input.trim(),
      key: Math.random().toString(36).substr(2, 9),
      isCompleted: false,
    });
    this.setState({ todo }, this.saveToLocal);
  };

  onDeleteHandler = (key) => {
    window.navigator.vibrate(100);
    const todo = this.state.todo.filter((item) => item.key !== key);
    this.setState({ todo }, this.saveToLocal);
  };

  render() {
    return (
      <div className="container">
        <section className="head-section">
          <h1>Todo List App</h1>
        </section>
        <section className="form-section">
          <Form
            value={this.state.input}
            setInputHandler={this.setInputHandler}
            onAddHandler={this.onAddHandler}
          />
        </section>
        <section className="todo-section">
          {this.state.todo.map((todo) => (
            <Todo
              todo={todo}
              name={todo.name}
              key={todo.key}
              onDelete={this.onDeleteHandler}
              onComplete={this.onCompleteHandler}
              isComplete={todo.isCompleted}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
