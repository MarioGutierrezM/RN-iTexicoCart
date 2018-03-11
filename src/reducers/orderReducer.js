import {
    GET_ORDERS,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    orders: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return { ...state };
        case GET_ORDERS_SUCCESS:
            return { ...state, orders: [...state.orders, ...action.payload] };
        case GET_ORDERS_FAIL:
            return { ...state };
        default:
            return state;
    }
};
