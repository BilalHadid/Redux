import { createstore } from 'redux'
import { countReducer } from './producer/countProducer'

const store = createstore(countReducer)

export default store