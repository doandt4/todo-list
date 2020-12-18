import React, { useState } from "react";

import "./reset.css";
import "./App.scss";
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import "./components/FontawesomeIcons";

function App() {
  const [todoList, setTodoList] = useState(
    [
      { id: 0, title: "I love you", isComplete: true, isEdit: false },
      { id: 1, title: "I love you 3000 ", isComplete: false, isEdit: false },
      { id: 2, title: "I hate you 6000", isComplete: false, isEdit: false },
    ]
  );
  
  function handleRemoveList(todo) {
    const newTodoList = [...todoList].filter((todoItem) => todoItem.id !== todo.id);
    setTodoList(newTodoList);
  }

  function handleOnToDoClick(todo) {
    const newTodoList = [...todoList];
    const todoItem = newTodoList.find((todoItem) => todoItem.id === todo.id)
    todoItem.isComplete = !todoItem.isComplete;
    setTodoList(newTodoList);
  }

  function handleClickEdit(todo) {
    const newTodoList = [...todoList];
    const todoItem = newTodoList.find((todoItem) => todoItem.id === todo.id)
    todoItem.isEdit = true;
    setTodoList(newTodoList);
  }

  function handleSubmit(todo) {
    const newTodoList = [...todoList];
    newTodoList.push(todo);
    setTodoList(newTodoList);
  }

  function onSubmitEdit(todo) {
    let newTodoList = [...todoList]
    const element =  newTodoList.find(e => e.id === todo.id);
    element.title = todo.title;
    element.isEdit = false;
    newTodoList = newTodoList.filter((todoItem) => todoItem.title !== '')
    setTodoList(newTodoList)
  }
  
  return (
    <div className="container">
      <h1>My to-dos</h1>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList
        todos={todoList}
        removeList={handleRemoveList}
        onTodoClick={handleOnToDoClick}
        onSubmit={handleSubmit}
        onClickEdit={handleClickEdit}
        onSubmitEdit={onSubmitEdit}
        
      />
    </div>
  );
}
export default App;
