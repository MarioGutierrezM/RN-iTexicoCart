import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    products: []
};

export default (state = INITIAL_STATE, action) => {
    //console.log(action);
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state };
        case GET_PRODUCTS_SUCCESS:
            return { ...state, products: [...action.payload] };
        case GET_PRODUCTS_FAIL: 
            return { ...state };
        default:
            return state;
    }
};
