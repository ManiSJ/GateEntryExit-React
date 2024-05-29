import {  legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { thunk } from 'redux-thunk'
import { rootReducer } from './rootReducer'

const middlewares = [logger, thunk];
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));