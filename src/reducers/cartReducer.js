import {
    PRODUCT_ADDED_SUCCESS,
    CLEAN_CART_SUCCESS,
    PRODUCT_DELETED_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    cartProducts: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PRODUCT_ADDED_SUCCESS:
            return {
                ...state,
                cartProducts: [...state.cartProducts, action.payload]
            };
        case CLEAN_CART_SUCCESS:
            return { ...state, cartProducts: [] };
        case PRODUCT_DELETED_SUCCESS: 
            return {
                ...state,
                cartProducts: [
                    ...state.cartProducts.filter(product => product.product_id !== action.payload)
                ]
            };
        default:
            return state;
    }
};
