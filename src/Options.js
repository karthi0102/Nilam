import React, { Component } from 'react'
import OptionBoxes from './OptionBoxes';
function Options(props){
    return(
        <div className='Options'>
            
            <label>{props.label} values</label>
            <OptionBoxes >Option 1</OptionBoxes>
            <OptionBoxes >Option 1</OptionBoxes>
        </div>
    )
}

export default Options;