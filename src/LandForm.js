import React, { useState,Component } from 'react'
import Header from './Header'
import Input from './Input'
import Options from './Options'
import Dropdown from './Dropdown'
import {v4 as uuidv4} from "uuid"
import './LandForm.scss'
function LandForm(props){
    
    const [field,setField]=useState([{
       id:uuidv4(),name:'',farmer:'',dis:true,opt:''
    }
    ])
    const setStateOfParent =(id,optValue) =>{
        const newInputFields = field.map(i => {
            if(id === i.id) {
                i.opt=optValue
            }
            return i;
          })
          
          setField(newInputFields);
      }
      const setDis =(id) =>{
        const newInputFields = field.map(i => {
            if(id === i.id) {
              i.dis=!(i.dis)
            }
            return i;
          })
          
          setField(newInputFields);
      }
      const handleSubmit =() =>{
          console.log('submiited')
      }
    const deleteField =(id) =>{
       
            const values  = [...field];
            values.splice(values.findIndex(value => value.id === id), 1);
            setField(values);
          
        
    }
      const handleChangeInput = (id, event) => {
        const newInputFields = field.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
        
        setField(newInputFields);
      }
    
      const handleAddFields = () => {
        setField([...field, { id: uuidv4(),  name: '', farmer: '',dis:true }])
      }
    
    let option=['select','CheckBox','Dropdown','Free Text','Number']

    
    return(

 <div className='LandForm'>
        
            <h1 className='heading'>LAND DETAILS FORM</h1>
        {field.map(f => (
            <div key={f.id}>
            <Header name="Field" deleteField={deleteField} key={f.id} id={f.id} setDis={setDis} value={f.dis} />
            {f.dis && 
             <div className='fieldForm'>
                  <Input 
                  placeholder='First name'
                   required={true} 
                   value={f.name} 
                   name="fname" 
                   onChange={e => handleChangeInput(f.id,e)
                }
                   >
                      placeholder
                  </Input>

                  <Input
                   placeholder='Name of the farmer'
                    required={true} 
                    name="farmner_name"
                    value={f.farmer}
                    onChange={e => handleChangeInput(f.id,e)} >
                     Hint Text
                  </Input>
    
                  <Dropdown key={f.id} id={f.id} setStateOfParent = {setStateOfParent}  options={option}  name='Response' >Response Type</Dropdown>
                  {(f.opt=='CheckBox' || f.opt=='Dropdown') && <Options label={f.opt} />
                  
                  }
                 
              </div>
}
        </div>
        ))}
            


        <a onClick={handleAddFields} className='addNew'>Add new 
        Field</a>

        <button onClick={handleSubmit} className='submit' >SAVE FORM</button>
        </div>
        
    )
}


export default LandForm