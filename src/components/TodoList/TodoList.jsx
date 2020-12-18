import React, { useEffect, useRef, useState } from "react";

import './style.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoList = ({ todos, removeList, onTodoClick, onClickEdit, onSubmitEdit }) =>{
  const [value, setValue] = useState('');
  const inputRef = useRef(null)
  
  useEffect(()=> {
    inputRef.current && inputRef.current.focus()
  })

  const handleRemoveClick = (todo) =>{
    removeList && removeList(todo);
  }

  const handleTodoClick = (todo) =>{
    onTodoClick && onTodoClick(todo);
  }

  const handleEdit = (todo) =>{
    if (onClickEdit) {
      setValue(todo.title);
			onClickEdit(todo);
    } 
  }

  const onChangeEdit = (e) =>{
    setValue(e.target.value);
  }

  const handleOnSubmitEdit = (e, id) =>{
    e.preventDefault();
    onSubmitEdit && onSubmitEdit({
      title: value,
      id: id,
    });
  }

	const handleOnBlur = (e, id) =>{
		setValue(e.target.value)
		onSubmitEdit && onSubmitEdit({
      title: value,
      id: id,
    });
  }
  
  return (
    <div className="TodoList">
      <ul>
        {todos.length > 0 && todos.map((todo, index) =>
          !todo.isEdit ? (
              <li className={`TodoList-item ${todo.isComplete ? 'isComplete' : ''}`} key={todo.id}>
                <p className="TodoList-title" onClick={() => handleTodoClick(todo)}>
                  {todo.title}
                </p>
                <div className="TodoList-option-item">
                  <span className="TodoList-edit-btn TodoList-btn" onClick={() => handleEdit(todo)}>
                    <FontAwesomeIcon icon={["fas", "edit"]}/>
                  </span>
                  <span
                    className="TodoList-del-btn TodoList-btn"
                    onClick={() => handleRemoveClick(todo)}
                  >
                    <FontAwesomeIcon icon={["fas", "trash"]} />
                  </span>
                </div>
              </li>
            ) : (
              <li className={`TodoList-item ${todo.isComplete ? 'isComplete' : ''}`} key={todo.id}>
                  <div className="TodoList-input-Container">
                    <form onSubmit={(e) => handleOnSubmitEdit(e, todo.id)} >
                        <input 
                          ref={inputRef}
                          className="TodoList-title-input"
                          type="text"
                          onChange={onChangeEdit}
                          name="title"
                          value={value}
                          onBlur = {(e)=>{handleOnBlur(e, todo.id)}}
                        />
                    </form>
                  </div>
                <div className="TodoList-option-item">
                  <span className="TodoList-edit-btn TodoList-btn" onClick={() => handleEdit(todo)}>
                    <FontAwesomeIcon icon={["fas", "edit"]}
                    />
                  </span>
                  <span
                    className="TodoList-del-btn TodoList-btn"
                    onClick={() => handleRemoveClick(todo)}
                  >
                    <FontAwesomeIcon icon={["fas", "trash"]} />
                  </span>
                </div>
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default TodoList;
