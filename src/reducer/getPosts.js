const getPostsReducer = (state = [], action) =>{
    switch (action.type) {
        case "GET_POSTS":
            return action.payload;    
        default:
            return state;
    }
}

export default getPostsReducer;