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
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false,
    nickName: '',
    number: '',
    userId: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentification Failed.', password: '', loading: false };
        case NICK_NAME_CHANGED:
            return { ...state, nickName: action.payload };
        case NUMBER_CHANGED:
            return { ...state, number: action.payload };
        case REGISTER_USER:
            return { ...state, loading: true, error: '' };
        case REGISTER_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case REGISTER_USER_FAIL:
            return { ...state, loading: false, error: 'Register Failed', password: '', email: '' };
        case ASSIGN_USER_ID_SUCCESS:
            return { ...state, userId: action.payload };
        default:
            return state;
    }
};
