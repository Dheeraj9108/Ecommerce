import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReaducer from '../reducers'

const store = createStore(rootReaducer,applyMiddleware(thunk))

export default store;