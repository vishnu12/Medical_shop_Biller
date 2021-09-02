import React, { Dispatch, SetStateAction } from 'react'
import { Form } from 'react-bootstrap'
import data from '../../data'
import './ListItem.css'

interface Props{
  setNameFunc:Dispatch<SetStateAction<string>>
}

export const ListItem: React.FC<Props> = ({setNameFunc}) => {

  function handleChange(e:React.FormEvent<HTMLSelectElement>):void{
    setNameFunc(e.currentTarget.value)
    
  }
    return (
      <Form.Select className='selector' onChange={handleChange}>
      <option></option>
      {
        data.map((itm,key)=><option key={key} value={itm.name}>{itm.name}</option>)
      }
    </Form.Select>
    )
}
