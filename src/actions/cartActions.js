import {
    PRODUCT_ADDED_SUCCESS,
    CLEAN_CART_SUCCESS,
    PRODUCT_DELETED_SUCCESS
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

export const productDeleted = (id) => {
    return (dispatch => {
        dispatch({ type: PRODUCT_DELETED_SUCCESS, payload: id });
    });
};
