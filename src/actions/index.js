import  _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const getPostsAndUsers = () => async (dispatch,getState) =>{
    await dispatch(getPosts());
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id=>dispatch(getUser(id)));
}

export const getPosts = ()=>{
    return async (dispatch, getState) => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({type:'GET_POSTS', payload:response.data})
    }
}

export const getUser = id => async dispatch => {
        const response = await jsonPlaceholder.get(`/users/${id}`);
        dispatch({type:"GET_USER",payload:response.data});
    
}
