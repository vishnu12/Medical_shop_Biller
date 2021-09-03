import { Dispatch } from "react";
import { List } from "../helpers";


export interface Istate{
    allItems:List[],
    cart:List[],
    success:boolean
}

export type Action=
|{type:'ADD_ITEMS_TO_CART',payload:List}
|{type:'GET_ALL_ITEMS',payload:List[]}
|{type:'REMOVE_FROM_CART',payload:string}
|{type:'ADD_ITEMS_TO_STORE'}
|{type:'CLEAR_ADD_STORE_SUCCESS_STATE'}


export interface ContextModel{
   state:Istate
   dispatch:Dispatch<Action>
}