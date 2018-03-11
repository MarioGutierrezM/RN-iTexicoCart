import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import orderReducer from './orderReducer';

export default combineReducers({
    auth: authReducer,
    cart: cartReducer,
    allProducts: productReducer,
    myOrders: orderReducer
});
