import axios from 'axios';
import {postAction} from '../action/postAction.js'

export const getPostMiddlewares = () => {
    return async dispatch => {
        try{
            dispatch(postAction.getPostStart())

            const data = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
            console.log(data)
        }
        catch(err){
            console.log(err)
        }
    }
}