import { Dispatch } from "react";
import { List } from "../helpers";


export interface Istate{
    items:List[]
}

export type Action={type:'ADD_ITEMS',payload:List}


export interface ContextModel{
   state:Istate
   dispatch:Dispatch<Action>
}