import {
    PRODUCT_ADDED_SUCCESS,
    CLEAN_CART_SUCCESS,
    PRODUCT_DELETED_SUCCESS,
    ADD_QUANTITY_SUCCESS,
    SUB_QUANTITY_SUCCESS
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

export const addOne = (id) => {
    return (dispatch => {
        dispatch({ type: ADD_QUANTITY_SUCCESS, payload: id });
    });
};

export const subtractOne = (id) => {
    return (dispatch => {
        dispatch({ type: SUB_QUANTITY_SUCCESS, payload: id });
    });
};
