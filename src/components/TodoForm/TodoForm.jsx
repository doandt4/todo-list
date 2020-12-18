import React, { useState } from 'react';
import './style.scss'

const TodoForm = ({onSubmit}) =>{
    const [values, setValues] = useState({
        title: '',
    });
    
    const handleOnchange = (e) =>{
        setValues({...values, [e.target.name] : e.target.value})
        console.log(values);
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        values && onSubmit && onSubmit({
            id: new Date().valueOf(),
            title: values.title,
            isEdit: false,
            isComplete: false,
        });
        setValues({...values, title: '',})
    }
    return(
        <div className="TodoForm">
            <form onSubmit = {handleOnSubmit}>
                <input className="TodoForm-Input" type="text" name="title" value = {values.title} onChange = {handleOnchange} placeholder="Create a new to-do..."/>
            </form>    
        </div>
    )
}

export default TodoForm;