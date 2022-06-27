import { authconstants } from "./constants"

export const login = (user) =>{
    console.log(user);
    return async (dispatch)=>{
        dispatch({
            type:authconstants.LOGIN_REQUEST,
            payload:{
                ...user
            }
        })
    }
}