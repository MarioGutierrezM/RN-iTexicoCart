import {
    PRODUCT_ADDED, PRODUCT_ADDED_SUCCESS
} from './types';

export const productAdded = (product) => {
    return (dispatch) => {
        dispatch({ type: PRODUCT_ADDED_SUCCESS, payload: product });
    };
}; 
