import { createStore } from 'redux'
import { countReducer } from './producer/countProducer'

const store = createStore(countReducer)

export default store