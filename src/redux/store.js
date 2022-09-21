import {createStore, combineReducers, applyMiddleware, compose } from 'redux'
import initialState from './initialState'
import modifyRedux from './modifyRedux'
import thunk from 'redux-thunk'

const subreducers ={
table: modifyRedux,
}


const reducer = combineReducers(subreducers);

const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.
        __REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;