import React,{useContext} from 'react'
import { Table,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Context} from '../../context/tableContext'
import { findGrantTotal } from '../../helpers'
import './Print.css'

export const Print = () => {

    const context=useContext(Context)
    const {state:{cart},dispatch}=context

    return (
        <div className='print'>
            <div className='print-header'>
              <div className='child1'><h2>Raju Medicals And Surgicals</h2></div>
              <div className='child2'>
                  <p>Near General Hospital</p>
                  <p>Vanchiyoor Road</p>
                  <p> Trivandrm</p>
                  <p>Phone:856985632</p>
              </div>
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
                <td>{itm.name}</td>
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

<Link to ='/' className='btn btn-outline-success'>Back Home</Link>
<Button variant='outline-success' className='btn' onClick={()=>window.print()}>Print</Button>
        </div>
    )
}
