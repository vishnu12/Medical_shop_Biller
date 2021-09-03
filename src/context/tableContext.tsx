import {createContext, useReducer} from 'react'
import { ContextModel,Istate } from './types'
import {reducer} from './reducer'

export const Context=createContext({} as ContextModel)

type Props={
    children:JSX.Element|JSX.Element[]
}

export const TableProvider:React.FC<Props> = ({children}) => {

    const intialState:Istate={
        allItems:[],
        cart:[],
        success:false
    }
    

    const [state,dispatch]=useReducer(reducer,intialState)
    return (
        <Context.Provider value={{state,dispatch}}>
         {children}
        </Context.Provider>
    )
}
