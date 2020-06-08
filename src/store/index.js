import { createStore , combineReducers, applyMiddleware} from 'redux'
import { countReducer } from './producer/countProducer'
import thunk from 'redux-thunk'
import {postReducer} from './producer/postReducer.js'

const reducer = combineReducers({
    count: countReducer,
    post: postReducer
})
const store = createStore(reducer,applyMiddleware(thunk))

export default store