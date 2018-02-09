import * as actions from '../actions/data_action'
import * as data_actions from '../actions/data_action'

const initialState = {
    data:[],
    addedItems:[]
}

const data_reducer = (state = initialState, action) => {
    switch(action.type) {
        case data_actions.SAVE_DATA:
            return Object.assign({},state, {
                data:action.data
            })
        case data_actions.ADD_CART:
            let cart = state.addedItems.slice()
            cart.push(state.data[action.index])
            return Object.assign({}, state, {
                addedItems:cart
            })
        default:
            return state;
    }
}

export default data_reducer