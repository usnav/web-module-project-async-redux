import axios from 'axios';

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_START = "FETCH_START";



export const getGifs = (searchTerm) => {
    return (dispatch) => {
        dispatch(fetchStart())
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=9XsIGZklsewlHkJJH5dcjNTWoup273qG&q=${searchTerm}`)
        .then(res => {
            dispatch(fetchSuccess(res.data.data))
        })
        .catch(error => {
            dispatch(fetchFail(error.message))
        })
    }
}

export const fetchStart = () =>{
    return ({type:FETCH_START});
}

export const fetchSuccess = () => {
    return ({type:FETCH_SUCCESS, payload: gifs})
}

export const fetchFail = () => {
    return ({type:FETCH_FAIL, payload: error})
}