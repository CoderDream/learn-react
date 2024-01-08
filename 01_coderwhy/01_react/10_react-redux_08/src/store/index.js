import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';

import reducer from './reducer.js';

// 应用一些中间件
// applyMiddleware(中间件1,中间件2,中间件3)
const storeEnhancer = applyMiddleware(thunkMiddleware)

const store = createStore (reducer, storeEnhancer);

export default store;
