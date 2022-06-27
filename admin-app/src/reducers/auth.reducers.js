import { authconstants } from "../actions/constants"

const initialState = {
    token: null,
    user: {
        firstname: "",
        lastName: "",
        email: "",
        picture: "",
    },
    authenticate: false,
    authenticating: false
}

export const authReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case authconstants.LOGIN_REQUEST: state = {
            ...state,
            authenticating: true
        }
            break;
        case authconstants.LOGIN_SUCCESS: state = {
            ...state,
            user: action.payload.user,
            token: action.payload.token,
            authenticate: true,
            authenticating:false
        }
            break;
    }
    //console.log(state);
    return state;
}