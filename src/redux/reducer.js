import {routerReducer} from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-connect';
import {reducer as form} from 'redux-form';
import auth from './modules/auth';
import questions from './modules/questions';
import notifs from './modules/notifs';
import {items, itemsHasErrored, itemsIsLoading} from './modules/items';
import {localeReducer as locale} from 'react-localize-redux';

export default function createReducers(asyncReducers) {
    return {
        routing: routerReducer,
        reduxAsyncConnect,
        form,
        notifs,
        auth,
        items,
        questions,
        itemsHasErrored,
        itemsIsLoading,
        locale,
        ...asyncReducers
    };
}
