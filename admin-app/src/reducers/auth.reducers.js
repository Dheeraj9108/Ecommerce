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
    authenticating: false,
    lodaing:false,
    error:null,
    message:''
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
            authenticating: false
        }
            break;
        case authconstants.LOUGOUT_REQUEST: state = {
            ...state,
            lodaing:true
        }
            break;
        case authconstants.LOUGOUT_SUCCESS: state = {
            ...initialState
        }
            break;
        case authconstants.LOUGOUT_FAILURE: state = {
            ...state,
            error : action.payload.error,
            loading:false
        }
            break;
    }
    //console.log(state);
    return state;
}