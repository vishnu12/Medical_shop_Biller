import React,{useState,useContext,useEffect} from 'react'
import { Table ,Button,Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaTrashAlt} from 'react-icons/fa'
import './Biller.css'
import {findGrantTotal, findPriceByname, getItemsFromStore, itemExists, List } from '../../helpers'
import {Context} from '../../context/tableContext'


export const Biller:React.FC = () => { 

  useEffect(()=>{
    getItemsFromStore(dispatch)
    dispatch({type:'CLEAR_ADD_STORE_SUCCESS_STATE'})
   },[])

  const context=useContext(Context)
  const {state:{allItems,cart},dispatch}=context

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
    }else if(itemExists(name,cart)){
      alert("This item is already added")
      return 
    }else{
      const listObj:List={
        name,
        price:findPriceByname(name,allItems),
        quantity,
        total:findPriceByname(name,allItems)*quantity
      }
      //code to be written
      dispatch({type:'ADD_ITEMS_TO_CART',payload:listObj})
    }
  }

  function handleTrash(name:string){
    dispatch({type:'REMOVE_FROM_CART',payload:name})
  }
 
    return (
        <div className='biller'>
        <div className="first-child"> 
        <Form.Select className='selector' id='selector' onChange={handleNameChange}>
      <option>Choose Medicine</option>
      {
        allItems.map((itm,key)=><option key={key} value={itm.name}>{itm.name}</option>)
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
        cart.map((itm,ind)=>{
           return <tr key={ind}>
               <td>{ind+1}</td>
                <td>{itm.name}<span className='trash' onClick={()=>handleTrash(itm.name)}><FaTrashAlt /></span></td>
                <td>{itm.price}</td>
                <td>{itm.quantity}</td>
                <td>{itm.total}</td>
                </tr>
       })
      }
      {
        cart.length!==0 &&
        <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><h3>Grand Total</h3></td>
                  <td><h3>RS. {findGrantTotal(cart)}</h3></td>
                </tr>
                
      }        
  </tbody>
</Table>

<Link to='/print' className='btn btn-outline-success'>Print Receipt</Link>
        </div>
    )
    }
