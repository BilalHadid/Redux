import { createStore , combineReducers} from 'redux'
import { countReducer } from './producer/countProducer'

const store = createStore(combineReducers({
    count: countReducer
}))

export default store