import React, { useState,Component } from 'react'
import OptionBoxes from './OptionBoxes';
import {v4 as uuidv4} from "uuid"
function Options(props){
    const [option,setOptions]=useState(
        [
            {id:uuidv4()},
        ]
    )
    return(
        <div className='Options'>
            
            <label>{props.label} values</label>
            <OptionBoxes >Option 1</OptionBoxes>
            <OptionBoxes >Option 1</OptionBoxes>
        </div>
    )
}

export default Options;