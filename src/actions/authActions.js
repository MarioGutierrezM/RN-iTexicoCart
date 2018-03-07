import firebase from 'firebase';
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
};

export const registerUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: REGISTER_USER });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => registerUserSuccess(dispatch, user))
            .catch(() => {
                registerUserFail(dispatch);
            });
    };
};

const registerUserFail = (dispatch) => {
    dispatch({ type: REGISTER_USER_FAIL });
};

const registerUserSuccess = (dispatch, user) => {
    dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: user
    });
};
