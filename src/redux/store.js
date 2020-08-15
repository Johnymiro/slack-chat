import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import AuthSaga from "./ducks/auth.duck";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(A)