import thunk from "redux-thunk";
import PostReducer from "./redux/reducers/PostReducer";
import { applyMiddleware, createStore } from "redux";
const store = createStore(PostReducer,applyMiddleware(thunk))
export default store;