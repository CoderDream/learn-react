import { createStore, applyMiddleware, compose } from 'redux';

import thunkMiddleware from 'redux-thunk';

import reducer from './reducer.js';

// 应用一些中间件
// applyMiddleware(中间件1,中间件2,中间件3)
const storeEnhancer = applyMiddleware(thunkMiddleware)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

const store = createStore (reducer, composeEnhancers(storeEnhancer));

export default store;
