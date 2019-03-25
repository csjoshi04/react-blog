import { combineReducers } from "redux";
import  getPostsReducer from "./getPosts";
import usersReducer from "./getUser";

export default combineReducers({
    posts: getPostsReducer,
    users: usersReducer
})