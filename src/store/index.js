import { createStore , combineReducers, applyMiddleware} from 'redux'
import { countReducer } from './producer/countProducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    count: countReducer
})
const store = createStore(reducer,applyMiddleware(thunk))

export default store