import React, { Component } from 'react'
import './Input.scss'
function Input(props){
        return(
            <div className='input'>
                <label>{props.children}</label>
                <input type='text' placeholder={props.placeholder} required={props.required}  name={props.name}  />
            </div>
        )
}


export default Input