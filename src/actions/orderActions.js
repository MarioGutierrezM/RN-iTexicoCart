import OrderController from '../controllers/orderController';
import {
    GET_ORDERS,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAIL
} from './types';

export const getOrders = (userID) => { //obtener id por parametro y hacer filter
    return (dispatch) => {
        dispatch({ type: GET_ORDERS });
        OrderController.getAllOrders(res => {
            const arrayFilter = res.data.filter(order => order.client_id === userID);
            dispatch({ type: GET_ORDERS_SUCCESS, payload: arrayFilter });
        }).catch(() => dispatch({ type: GET_ORDERS_FAIL }));
    };
};
