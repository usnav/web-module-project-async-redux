import data from '../data/gifsData';
import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from '../actions/index';

const initialState = {
    gifs: data,
    loading: false,
    error: ""
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state, 
                data: [],
                loading: true, 
                error: ""
            }
        case FETCH_SUCCESS:
            return {
                ...state, 
                data: action.payload, 
                loading: false, 
                error:""
            }
        case FETCH_FAIL:
            return {
                ...state, 
                data: [], 
                loading: false, 
                error: action.payload
            }
        default:
            return(state);
    }
}

export default reducer; 