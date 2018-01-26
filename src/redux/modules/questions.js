import app from 'app';
import {SubmissionError} from 'redux-form';

import {
    SEND, SEND_SUCCESS, SEND_FAIL,
    GET_QUESTIONS, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_FAIL
} from "../../constants/questions";


import {sendQuestionService, getQuestionsService} from '../services/questionServices';

const initialState = {
    loaded: false
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SEND:
            return {
                ...state,
                loading: true
            };
        case SEND_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                question: action.result
            };
        case SEND_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.error
            };
        case GET_QUESTIONS:
            return {
                ...state,
                questionsLoading: true
            };
        case GET_QUESTIONS_SUCCESS:
            return {
                ...state,
                questionsLoading: false,
                questionsLoaded: true,
                questionsList: action.result
            };
        case GET_QUESTIONS_FAIL:
            return {
                ...state,
                questionsLoading: false,
                questionsLoaded: false,
                error: action.error
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

export function sendQuestion(data) {
    return {
        types: [SEND, SEND_SUCCESS, SEND_FAIL],
        promise: (client) => sendQuestionService(data, client.token)
            .then(response => {
                console.log('Send question response:', response.data.result);
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                return response.data.result;
            }).catch(catchValidation)
    };
}

export function getQuestions() {
    return {
        types: [GET_QUESTIONS, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_FAIL],
        promise: (client) => getQuestionsService(client.token)
            .then(response => {
                console.log('Get questions response:', response.data.result);
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                return response.data.result;
            }).catch(catchValidation)
    };
}