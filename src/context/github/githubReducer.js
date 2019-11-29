import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case SET_LOADING: 
            return {
                ...state, 
                loading: true
            }

        default: 
            return state;
    }
}