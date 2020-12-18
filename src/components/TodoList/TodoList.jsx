import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
// import "./style.css";
import './style.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

TodoList.propTypes = {
  todos: PropTypes.array,
  removeList: PropTypes.func,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  removeList: null,
  onTodoClick: null,
};

function TodoList(props) {
  const { todos, removeList, onTodoClick, onClickEdit, onSubmitEdit,  } = props;
  const [value, setValue] = useState();
  const inputRef = useRef()
  
  useEffect( ()=> {
    if (inputRef.current){
      // console.log(inputRef.current);
      inputRef.current.focus()
    }
    return {

    }
  })

  function handleRemoveClick(todo) {
    if(removeList) {
      removeList(todo);
    }
  }

  function handleTodoClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }

  function handleEdit(todo) {
    if (onClickEdit) {
      setValue(todo.title);
			onClickEdit(todo);
    } 
  }

  function onChangeEdit(e) {
    setValue(e.target.value);
  }

  function handleOnSubmitEdit(e, id) {
    e.preventDefault();
    onSubmitEdit && onSubmitEdit({
      title: value,
      id: id,
    });
  }

	function handleOnBlur(e, id){
		setValue(e.target.value)
		onSubmitEdit && onSubmitEdit({
      title: value,
      id: id,
    });
  }
  
  return (
    <div className="todoList-Container">
      <ul>
        {todos.map((todo, index) =>
          !todo.isEdit ? (
              <li className={`todo-item ${todo.isComplete ? 'isComplete' : ''}`} key={todo.id}>
                <p className="title" onClick={() => handleTodoClick(todo)}>
                  {todo.title}
                </p>
                <div className="option-item">
                  <span className="edit-btn btn" onClick={() => handleEdit(todo)}>
                    <FontAwesomeIcon
                      icon={["fas", "edit"]}
                    />
                  </span>
                  <span
                    className="del-btn btn"
                    onClick={() => handleRemoveClick(todo)}
                  >
                    <FontAwesomeIcon icon={["fas", "trash"]} />
                  </span>
                </div>
              </li>
            ) : (
              <li className={`todo-item ${todo.isComplete ? 'isComplete' : ''}`} key={todo.id}>
                  <div className="input-Container">
                    <form onSubmit={(e) => handleOnSubmitEdit(e, todo.id)} >
                        <input 
                          ref={inputRef}
                          className="title-input"
                          type="text"
                          onChange={onChangeEdit}
                          name="title"
                          value={value}
                          onBlur = {(e)=>{handleOnBlur(e, todo.id)}}
                        />
                    </form>
                  </div>
                <div className="option-item">
                  <span className="edit-btn btn" onClick={() => handleEdit(todo)}>
                    <FontAwesomeIcon
                      icon={["fas", "edit"]}
                    />
                  </span>
                  <span
                    className="del-btn btn"
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
