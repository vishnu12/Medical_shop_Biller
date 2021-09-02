import { Action, Istate } from "./types";


export default(state:Istate,action:Action):Istate=>{
    switch (action.type) {
       
        case 'ADD_ITEMS':
            return {
                ...state,
                items:[...state.items,action.payload]

            }    
        default:
            return state;
    }
}