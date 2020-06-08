import {postRed} from './actionTypes.js'

export class postAction {
    static getPostStart = () => ({type: postRed.GET_POST_START})

    static getPostSuccess = (data) => ({type: postRed.GET_POST_SUCCESS, Payload: data})

    static getPostFailure = (err) => ({type: postRed.getPostFailure, Payload: err})
}