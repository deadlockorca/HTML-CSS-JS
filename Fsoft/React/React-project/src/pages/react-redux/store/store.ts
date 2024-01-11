import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import counterReducer from '../reducers/counter.reducer';
import academyReducer from '../reducers/academy.reducer';
import createSagaMiddleware from 'redux-saga';
import userReducer from '../sagas/user.reducer';
import rootSaga from '../sagas/root.saga';
import { RootState } from '../types/model';

const allReducers = combineReducers({ counterReducer, academyReducer, user: userReducer})

const sagaMiddleware = createSagaMiddleware();

const mainStore = createStore<RootState, any, any>(allReducers, applyMiddleware(sagaMiddleware));

// const mainStore = createStore(allReducers);

sagaMiddleware.run(rootSaga);


export { mainStore };