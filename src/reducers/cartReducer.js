import {
    PRODUCT_ADDED_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    cartProducts: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PRODUCT_ADDED_SUCCESS:
            return { ...state, cartProducts: [...state.cartProducts, action.payload] };
        default:
            return state;
    }
};
