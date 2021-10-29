import { REMOVE_CONFETTI, REMOVE_HOVERALERT } from '../actions/types';

const initialState = {
    isValid: true,
    sendAlert: false
}

export default function windowCheckReducer (state=initialState, action){
    const { type, payload } = action

    switch(type){

        case REMOVE_CONFETTI:
            return {
                ...state,
                isValid: payload,
                sendAlert: true
            }

        case REMOVE_HOVERALERT: 
            return {
                ...state,
                sendAlert: false
            }

        default:
            return state
    }
}