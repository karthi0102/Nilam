import React, { useState,Component } from 'react'
import Header from './Header'
import Input from './Input'
import Options from './Options'
import Dropdown from './Dropdown'
import {v4 as uuidv4} from "uuid"
import './LandForm.scss'
function LandForm(props){
    const [opt,changeOpt] = useState("")
    
    const [dis,setDis]=useState(true)
    const [field,setField]=useState([{
       id1:uuidv4(),placeholder:''
    }
        
    ])
    const  setStateOfParent = (newTitle) => {
        changeOpt(newTitle);
      }
      const setDisplay =(newTitle)=> {
            setDis(newTitle);
      }
    let option=['select','CheckBox','Dropdown','Free Text','Number']

    
    return(

 <div className='LandForm'>
        
        
            <h1 className='heading'>LAND DETAILS FORM</h1>

            <Header name="Field" toogleChange={setDisplay} value={dis} />
          {dis &&  <div className='fieldForm'>
                <Input placeholder='First name' required={true} name="fname" >
                    placeholder
                </Input>
                <Input placeholder='Name of the farmer' required={true} name="farmner_name" >
                   Hint Text
                </Input>
  
                <Dropdown  setStateOfParent = {setStateOfParent}  options={option}  name='Response' >Response Type</Dropdown>
                {(opt=='CheckBox' || opt=='Dropdown') && <Options label={opt} />}
               
            </div>
        }
        </div>
        
    )
}


export default LandForm