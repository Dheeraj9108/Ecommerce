import axios from "../helpers/axios";
import { authconstants } from "./constants"

export const login = (user) => {
    // console.log(user);
    return async (dispatch) => {


        dispatch({ type: authconstants.LOGIN_REQUEST });
        const res = await axios.post('/admin/signin', {
            ...user
        })

        if (res.status == 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authconstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            })
        } else {
            if (res.status == 400) {
                dispatch({
                    type: authconstants.LOGIN_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                })
            }
        }
    }
}
export const isUserLogedIn = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authconstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            })
        } else {
            dispatch({
                type: authconstants.LOGIN_FAILURE,
                payload: {
                    error: "Failed to login"
                }
            })
        }
    }
}