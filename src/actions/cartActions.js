import {
    PRODUCT_ADDED,
    PRODUCT_ADDED_SUCCESS,
    CLEAN_CART_SUCCESS
} from './types';

export const productAdded = (product) => {
    return (dispatch) => {
        dispatch({ type: PRODUCT_ADDED_SUCCESS, payload: product });
    };
};

export const cleanCart = () => {
    return (dispatch => {
        dispatch({ type: CLEAN_CART_SUCCESS });
    });
};
