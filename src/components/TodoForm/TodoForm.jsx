import React, { useState } from 'react';
// import './style.css'
import './style.scss'

TodoForm.PropsTypes = {

}

function TodoForm(props){
    const {onSubmit} = props;
    const [value, setValue] = useState('');
    

    function handleOnchange(e){
        setValue(e.target.value)
    }

    function handleOnSubmit (e){
        e.preventDefault()
        if (!onSubmit) return;
        if (!value){
            return;
        }
        onSubmit({
            id: new Date().valueOf(),
            title: value,
            isEdit: false,
            isComplete: false,
        });
        console.log(value);
        setValue('')
    }
    return(
        <div className="Form-Container">
            <form onSubmit = {handleOnSubmit}>
                <input className="Form-Input" type="text" value = {value} onChange = {handleOnchange} placeholder="Create a new to-do..."/>
            </form>    
        </div>
    )
}

export default TodoForm;