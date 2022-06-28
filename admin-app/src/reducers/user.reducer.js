import { userContatnts } from "../actions/constants"

const initialState = {
    error: null,
    message: '',
    loading: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userContatnts.USER_REGISTER_REQUEST: state = {
            ...state,
            loading: true
        }
            break;
        case userContatnts.USER_REGISTER_SUCCESS: state = {
            ...state,
            message: action.payload.message,
            loading: false
        }
            break;
        case userContatnts.USER_REGISTER_FAILURE: state = {
            ...state,
            loading: false,
            error: action.payload.error
        }
            break;
    }
    return state;
}