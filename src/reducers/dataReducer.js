import * as actions from '../actions/data_action'
import * as data_actions from '../actions/data_action'

const initialState = {
    data:[],
    addedItems:[],
    currentItem:-999
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
                addedItems:cart,
            })
        case data_actions.CHANGE_BORDER:
            return Object.assign({}, state, {
            currentItem:action.index
            })
        default:
            return state;
    }
}

export default data_reducer