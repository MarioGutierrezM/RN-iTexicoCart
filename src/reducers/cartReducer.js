import {
    PRODUCT_ADDED,
    PRODUCT_ADDED_SUCCESS,
    PRODUCT_ADDED_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    products: []
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case PRODUCT_ADDED_SUCCESS:
            return { ...state, products: [...state.products, action.payload] };
        default:
            return state;
    }
};
