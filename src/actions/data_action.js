import axios from 'axios'

export const SAVE_DATA = 'SAVE_DATA'
export const ADD_CART ='ADD_CART'

export const receiveData = (data) => {
    return {
    type:SAVE_DATA,
    data
    }
}
export const fetchData = () => {
    return (dispatch) => {
    return axios.get('/data.json')
    .then((response) => dispatch(receiveData(response.data.products)))
}
}

export const addCart = (index) => {
    return {
        type:ADD_CART,
        index
    }
}