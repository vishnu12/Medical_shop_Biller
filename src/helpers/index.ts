import { Action } from "../context/types"

// import data from '../data'
const URL="http://localhost:5000/data"


export interface List{
   name:string
   price:number
   quantity:number
   total:number
}

export const removeItem=(index:number,arr:List[])=>{
   arr.splice(index,1)
}

export const findPriceByname=(name:string,items:List[]):number=>{
  const medicine=items.find(itm=>itm.name===name)
  return Number(medicine?.price)
}

export const itemExists=(name:string,list:List[]):boolean=>{
  return list.some(itm=>itm.name===name)
}

export const findGrantTotal=(list:List[]):number=>{
  return list.reduce((acc,itm)=>acc+itm.price*itm.quantity,0)
}

export const getItemsFromStore=async (dispatch:React.Dispatch<Action>)=>{
  const data= await (await fetch(URL)).json()
  dispatch({type:'GET_ALL_ITEMS',payload:data})
}

export const addMedicineToStore=async (item:Omit<List,'quantity'|'total'>,dispatch:React.Dispatch<Action>)=>{
  console.log(item);
  try {
    await fetch(URL,{
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(item)
    })
  
    dispatch({type:'ADD_ITEMS_TO_STORE'})
  } catch (error) {
    console.log(error);
    
  }
}