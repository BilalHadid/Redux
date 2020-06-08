import {postRed} from '../action/actionTypes.js'

const initialState = {
    data: [],
    error: null,
    loading: false
}
export const postReducer = (state = initialState, action) => {
    switch(action.type){
        case postRed.GET_POST_START:
            return{
                ...state,
                loading : true
            }
        case postRed.GET_POST_SUCCESS:
            return{
                ...state,
                loading: false,
                data: action.Payload
            }
        
        case postRed.GET_POST_FAILURE:
            return{
                ...state,
                error: action.Payload
            }
        
        default:
            return{
                ...state
            }
    }
}