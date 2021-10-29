
import {
    REMOVE_CONFETTI,
    REMOVE_HOVERALERT
} from '../actions/types'

export const windowCheck = (timeout=7000) => async dispatch => {
    
    dispatch({
        type: REMOVE_CONFETTI,
        payload: false
    })

    setTimeout(() => dispatch({ type: REMOVE_HOVERALERT }), timeout);
}

