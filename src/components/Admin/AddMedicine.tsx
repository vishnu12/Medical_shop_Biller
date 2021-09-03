import React,{useState,useEffect,useContext} from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {v4 as uuid} from 'uuid'
import {History} from 'history'
import {Context} from '../../context/tableContext'
import { addMedicineToStore, List } from '../../helpers'
import './AddMedicine.css'

type CustomList={
    id?:string,
    name:string,
    price:number
}

type Props={
    history:History
}

export const AddMedicine:React.FC<Props>= ({history}) => {

    const context=useContext(Context)
    const {state:{success},dispatch}=context

    const [values, setValues] = useState<CustomList>({
        name:'',
        price:0
    })

    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
       const {name,value}=e.currentTarget
       setValues({
           ...values,
           [name]:value
       })
    }


    function handleClick(){
     const item:CustomList={
         name:values.name,
         price:values.price,
         id:uuid()
     }   
     addMedicineToStore(item,dispatch)
    }

    useEffect(()=>{
      if(success){
        history.push('/')
      }
    },[success])

    return (
        <div className='add-med-form'>
            <FloatingLabel
                controlId="floatingInput"
                label="Medicine Name"
                className="label mb-3"
            >
            <Form.Control className='input' type="text" name="name"  onChange={handleChange} />
            </FloatingLabel>
            <FloatingLabel className='label' controlId="floatingPassword" label="Price">
                <Form.Control className='input' type="text" name="price"  onChange={handleChange} />
            </FloatingLabel>
            <Button className='add-med-btn' variant='outline-dark' onClick={handleClick}>Add Medicine</Button>
            <Link to='/' className='btn btn-outline-dark add-med-btn'>Back Home</Link>
        </div>
    )
}
