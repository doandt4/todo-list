import React, { useEffect, useState } from "react";

import "./reset.css";
import "./App.scss";
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import "./components/FontawesomeIcons";

const App = () =>{
  const [todoList, setTodoList] = useState(
    [
      { id: 0, title: "I love you", isComplete: true, isEdit: false },
      { id: 1, title: "I love you 3000 ", isComplete: false, isEdit: false },
      { id: 2, title: "I hate you 6000", isComplete: false, isEdit: false },
    ]
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const result = todoList.filter((todo) => {
      return todo.title.toLowerCase().includes(searchTerm);
    })
    setSearchResult(result)
  }, [todoList, searchTerm]);

  const handleSearch = (value) => {
    console.log(value);
    setSearchTerm(value)
  }
  
  const handleRemoveList = (todo) =>{
    const newTodoList = [...todoList].filter((todoItem) => todoItem.id !== todo.id);
    setTodoList(newTodoList);
  }

  const handleOnToDoClick = (todo) =>{
    const newTodoList = [...todoList];
    const todoItem = newTodoList.find((todoItem) => todoItem.id === todo.id)
    todoItem.isComplete = !todoItem.isComplete;
    setTodoList(newTodoList);
  }

  const handleClickEdit = (todo) =>{
    const newTodoList = [...todoList];
    const todoItem = newTodoList.find((todoItem) => todoItem.id === todo.id)
    todoItem.isEdit = true;
    setTodoList(newTodoList);
  }

  const handleSubmit = (todo) =>{
    const newTodoList = [...todoList];
    newTodoList.push(todo);
    setTodoList(newTodoList);
  }

  const onSubmitEdit = (todo) =>{
    let newTodoList = [...todoList]
    const todoItem =  newTodoList.find(todoItem => todoItem.id === todo.id);
    todoItem.title = todo.title;
    todoItem.isEdit = false;
    newTodoList = newTodoList.filter((todoItem) => todoItem.title !== '')
    setTodoList(newTodoList)
  }
  
  return (
    <div className="App">
      <h1>My to-dos</h1>
      <TodoSearch onSearch={handleSearch} />
      <TodoForm onSubmit={handleSubmit} />
      <TodoList
        todos={searchResult}
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
