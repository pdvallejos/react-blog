import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import loginReducer from '../reducer/login'
import Reducer from '../reducer/reducer'


const rootReducer = combineReducers({
    login: loginReducer,
    reducer: Reducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )

export default store;