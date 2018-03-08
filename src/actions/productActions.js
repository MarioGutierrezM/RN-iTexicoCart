import axios from 'axios';
import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL
} from './types';

export const getAllProducts = () => {
    return (dispatch) => {
        dispatch({ type: GET_PRODUCTS });
        axios.get('https://shopping-cart-api.herokuapp.com/api/product')
            .then(response => {
                dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
            }).catch(() => dispatch({ type: GET_PRODUCTS_FAIL }));
    };
};

