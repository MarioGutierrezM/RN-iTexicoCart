import {
    PRODUCT_ADDED_SUCCESS,
    CLEAN_CART_SUCCESS,
    PRODUCT_DELETED_SUCCESS,
    ADD_QUANTITY_SUCCESS,
    SUB_QUANTITY_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    cartProducts: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PRODUCT_ADDED_SUCCESS:
            const find = state.cartProducts.find(
                itera => action.payload.product_id === itera.product_id);
            if (!find) {
                return {
                    ...state,
                    cartProducts: [...state.cartProducts, action.payload]
                };
            }
            return { ...state };
        case CLEAN_CART_SUCCESS:
            return { ...state, cartProducts: [] };
        case PRODUCT_DELETED_SUCCESS:
            return {
                ...state,
                cartProducts: [
                    ...state.cartProducts.filter(product => product.product_id !== action.payload)
                ]
            };
        case ADD_QUANTITY_SUCCESS:
            return {
                ...state,
                cartProducts: state.cartProducts.map(product => {
                    if (product.product_id === action.payload) {
                        product.quantity += 1;
                    }
                    return product;
                 })
            };
        case SUB_QUANTITY_SUCCESS:
            return {
                ...state,
                cartProducts: state.cartProducts.map(product => {
                    if (product.product_id === action.payload) {
                        if (product.quantity >= 2) {
                            product.quantity -= 1;
                        }
                    }
                    return product;
                })
            };
        default:
            return state;
    }
};
