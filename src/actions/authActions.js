import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import ClientController from '../controllers/clientController';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    NICK_NAME_CHANGED,
    NUMBER_CHANGED,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER,
    ASSIGN_USER_ID_SUCCESS
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const nickNameChanged = (text) => {
    return {
        type: NICK_NAME_CHANGED,
        payload: text
    };
};

export const numberChanged = (text) => {
    return {
        type: NUMBER_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                loginUserFail(dispatch);
            });
    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.main();
};

export const registerUser = ({ email, password, nickName }) => {
    return (dispatch) => {
        dispatch({ type: REGISTER_USER });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                const body = {
                    name: nickName,
                    lastnamefa: '',
                    lastnamemo: '',
                    birthdate: '',
                    address: email
                };
                ClientController.createClient(body, res => {
                    registerUserSuccess(dispatch, user, res);
                }).catch(() => registerUserFail(dispatch));
            }).catch(() => {
                registerUserFail(dispatch);
            });
    };
};

const registerUserFail = (dispatch) => {
    dispatch({ type: REGISTER_USER_FAIL });
};

const registerUserSuccess = (dispatch, user, res) => {
    dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: user
    });
    dispatch({
        type: ASSIGN_USER_ID_SUCCESS,
        payload: res._id
    });
    Actions.main();
};
