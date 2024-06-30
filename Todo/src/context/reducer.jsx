import { ADD_TODO,REMOVE_TODO } from "./action.types";


export default (state ,action ) =>{
    switch (action.type) {
        case ADD_TODO:
            return[...state, action.payload]  //payload is the information it carried along with it
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload)
        default:
            break;
    }
}