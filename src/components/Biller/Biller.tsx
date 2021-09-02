import React,{useState,useContext} from 'react'
import { Table ,Button,Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Biller.css'
import data from '../../data'
import {findGrantTotal, findPriceByname, itemExists, List } from '../../helpers'
import {Context} from '../../context/tableContext'


export const Biller:React.FC = () => { 

  const context=useContext(Context)
  const {state:{items},dispatch}=context
 
   const [name, setName] = useState<string>('')
   const [quantity, setQuantity] = useState<number>(1)

   function handleNameChange(e:React.FormEvent<HTMLSelectElement>):void{
    setName(e.currentTarget.value)
  }
  
  function hadleQuantityChange(e:React.ChangeEvent<HTMLInputElement>){
   setQuantity(Number(e.currentTarget.value))
  }

  function handleClick(){
    if(name==='Choose Medicine'||name===''||name===null){
      alert('Please choose the medicine')
      return
    }else if(itemExists(name,items)){
      alert("This item is already added")
      return 
    }else{
      const listObj:List={
        name,
        price:findPriceByname(name),
        quantity,
        total:findPriceByname(name)*quantity
      }
      //code to be written
      dispatch({type:'ADD_ITEMS',payload:listObj})
    }
  }
 
    return (
        <div className='biller'>
        <div className="first-child"> 
        <Form.Select className='selector' id='selector' onChange={handleNameChange}>
      <option>Choose Medicine</option>
      {
        data.map((itm,key)=><option key={key} value={itm.name}>{itm.name}</option>)
      }
      </Form.Select>
      <Form.Control className='input' type="number" min="0" placeholder="Choose Quantity" 
      onChange={hadleQuantityChange}/>
      <Button className='button' variant='outline-dark' onClick={handleClick}>Add</Button>
        </div>

  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Sl.No</th>
      <th>Medicine</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
      {
        items.map((itm,ind)=>{
           return <tr key={ind}>
               <td>{ind+1}</td>
                <td>{itm.name}</td>
                <td>{itm.price}</td>
                <td>{itm.quantity}</td>
                <td>{itm.total}</td>
                </tr>
       })
      }
      {
        items.length!==0 &&
        <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><h3>Grand Total</h3></td>
                  <td><h3>{findGrantTotal(items)}</h3></td>
                </tr>
                
      }        
  </tbody>
</Table>

<Link to='/print' className='btn btn-outline-success'>Print Receipt</Link>
        </div>
    )
    }
