import OrderController from '../controllers/orderController';
import {
    GET_ORDERS,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAIL
} from './types';

export const getOrders = () => {
    return (dispatch) => {
        dispatch({ type: GET_ORDERS });
        OrderController.getAllOrders(res => {
            dispatch({ type: GET_ORDERS_SUCCESS, payload: res.data });
        }).catch(() => dispatch({ type: GET_ORDERS_FAIL }));
    };
};
