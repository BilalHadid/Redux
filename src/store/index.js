import { createStore , combineReducers} from 'redux'
import { countReducer } from './producer/countProducer'

const reducer = combineReducers({
    count: countReducer
})
const store = createStore(reducer)

export default store