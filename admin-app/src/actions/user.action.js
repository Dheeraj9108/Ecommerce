import { userContatnts } from "./constants"
import axios from "../helpers/axios";

export  const signup = (user) => {
    // console.log(user);
    return async (dispatch) => {
        dispatch({ type: userContatnts.USER_REGISTER_REQUEST });
        const res = await axios.post('/admin/signup', {
            ...user
        })

        if (res.status === 201) {
            // const {message} = res.data
            const message = res.data.user
            // localStorage.setItem('token', token);
            // localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: userContatnts.USER_REGISTER_SUCCESS,
                payload: {
                    message
                }
            })
        } else {
            if (res.status === 400) {
                dispatch({
                    type: userContatnts.USER_REGISTER_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                })
            }
        }
    }
}