import { compose, createStore, applyMiddleware } from "redux";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from "redux-logger";
import thunk from 'redux-thunk'
import { rootReducer } from "./root-reducer";
// import createSagaMiddleware from "@redux-saga/core";
// import { rootSaga } from "./root-saga";

const persistConfig ={
  key:'root',
  storage,
  whitelist:['cart']
}

// const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean)

const composeEnhancers = (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

// sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

