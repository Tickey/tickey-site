import app from 'app';
import {SubmissionError} from 'redux-form';
import cookie from 'js-cookie';

import {
    LOAD, LOAD_SUCCESS, LOAD_FAIL,
    LOGIN, LOGIN_SUCCESS, LOGIN_FAIL,
    ADMIN_LOGIN, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL
} from "../../constants/auth";


import {loginService, adminLoginService} from '../services/authServices';

const initialState = {
    loaded: false
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                loading: true
            };
        case LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                token: action.result.token,
                user: action.result.user
            };
        case LOAD_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.error
            };
        case LOGIN:
            return {
                ...state,
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                token: action.result.token,
                email: action.result.email,
                user: action.result
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loggingIn: false,
                loginError: action.error
            };
        case ADMIN_LOGIN:
            return {
                ...state,
                loggingIn: true
            };
        case ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                token: action.result.token,
                email: action.result.email,
                user: action.result
            };
        case ADMIN_LOGIN_FAIL:
            return {
                ...state,
                loggingIn: false,
                loginError: action.error
            };
        case LOGOUT:
            return {
                ...state,
                loggingOut: true
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loggingOut: false,
                token: null,
                user: null,
                email: null
            };
        case LOGOUT_FAIL:
            return {
                ...state,
                loggingOut: false,
                logoutError: action.error
            };
        default:
            return state;
    }
}

const catchValidation = error => {
    if (error.message) {
        if (error.message === 'Validation failed' && error.data) {
            throw new SubmissionError(error.data);
        }
        throw new SubmissionError({_error: error.response.data.message});
    }
    return Promise.reject(error);
};

function setToken(client, response) {
    const token = response.token;
    // set manually the JWT for both instances of feathers/client
    app.set('token', token);
    client.setJwtToken(token);
    return response;
}

function setCookie(response) {
    response.expires = 86400000;
    const options = {expires: response.expires / (60 * 60 * 24 * 1000)};
    cookie.set('tickey', app.get('token'), options);
    return response;
}

function removeCookie() {
    cookie.remove('tickey')
}

/*
 * Actions
 * * * * */

export function isLoaded(globalState) {
    return globalState.auth && globalState.auth.loaded;
}

export function login(data) {
    return {
        types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
        promise: client => loginService(data)
            .then(response => {
                console.log('Homepage response:', response);
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                return response.data.result;
            })
            .then(response => setToken(client, response))
            .then(setCookie)
            .then(response => {
                app.set('user', response);
                return response;
            })
            .catch(catchValidation)
    };
}


export function adminLogin(data) {
    return {
        types: [ADMIN_LOGIN, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL],
        promise: client => adminLoginService(data)
            .then(response => {
                console.log('Homepage response:', response);
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                return response.data.result;
            })
            .then(response => setToken(client, response))
            .then(setCookie)
            .then(response => {
                app.set('user', response);
                return response;
            })
            .catch(catchValidation)
    };
}


export function logout() {
    return {
        types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
        promise: client => app.logout()
            .then(() => {
                setToken(client, {token: null})
            })
            .then(removeCookie)
    };
}