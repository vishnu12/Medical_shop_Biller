import data from '../data'

export interface List{
   name:string
   price:number
   quantity:number
   total:number
}

export const removeItem=(index:number,arr:List[])=>{
   arr.splice(index,1)
}

export const findPriceByname=(name:string):number=>{
  const medicine=data.find(itm=>itm.name===name)
  return Number(medicine?.price)
}

export const itemExists=(name:string,list:List[]):boolean=>{
  return list.some(itm=>itm.name===name)
}

export const findGrantTotal=(list:List[]):number=>{
  return list.reduce((acc,itm)=>acc+itm.price*itm.quantity,0)
}