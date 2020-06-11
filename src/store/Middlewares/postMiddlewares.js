import axios from 'axios';
import {postAction} from '../action/postAction.js'

export const getPostMiddlewares = () => {
    return async dispatch => {
        try{
            dispatch(postAction.getPostStart())

            const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
            dispatch(postAction.getPostSuccess(data))
        }
        catch(err){
            dispatch(postAction.getPostFailure('Something went wrong'))
        }
    }
}