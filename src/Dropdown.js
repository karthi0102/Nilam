import React, {useState, Component } from 'react'
import './Dropdown.scss'
function Dropdown(props){
    const handleChange = e =>{
        props.setStateOfParent(e.target.value);
    }
    return (
        <div className='dropdown'>
            <label htmlFor={props.htmlFor}>{props.children}</label>
            <select  onChange={handleChange} name={props.name} id={props.htmlFor}  >
            {props.options.map((opt)=>{
                         return <option value={opt}>{opt}</option>
                })}
            </select>
        </div>
    )
}
export default Dropdown