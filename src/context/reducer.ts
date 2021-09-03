import { Action, Istate } from "./types";


export const reducer=(state:Istate,action:Action):Istate=>{
    switch (action.type) {

        case 'GET_ALL_ITEMS':
            return {
               ...state,
               allItems:action.payload
            }
       
        case 'ADD_ITEMS_TO_CART':
            return {
                ...state,
                cart:[...state.cart,action.payload]

            }  
            
            
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart:state.cart.filter(itm=>itm.name!==action.payload)
            }


        case 'ADD_ITEMS_TO_STORE':
            return {
                ...state,
                success:true
            }    


        case 'CLEAR_ADD_STORE_SUCCESS_STATE':
            return {
                ...state,
                success:false
            }    

        default:
            return state;
    }
}