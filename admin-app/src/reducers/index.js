import { combineReducers } from "redux";
import { authReducer } from "./auth.reducers";
import { categoryReducer } from "./category.reducer";
import { userReducer } from "./user.reducer";


const rootReducer = combineReducers({
    auth:authReducer,
    user:userReducer,
    category:categoryReducer
})
export default rootReducer;
