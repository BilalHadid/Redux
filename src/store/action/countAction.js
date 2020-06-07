import {increse_count,decrement_count} from './actionTypes.js'

export const increase_value = (value) => ({type: increse_count, Payload: value})
export const decrease_value = (value) => ({type: decrement_count,Payload:value})