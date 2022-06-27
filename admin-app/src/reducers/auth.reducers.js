import { authconstants } from "../actions/constants"

const initialState = {
    name:'dhe'
}

export const authReducer = (state = initialState,action)=>{
    console.log(action)
    switch(action.type){
        case authconstants.LOGIN_REQUEST: state = {
            ...state,
            ...action.payload
        }
        break;
    } 
    //console.log(state);
    return state;
}