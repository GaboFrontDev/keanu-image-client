import createSagaMiddleware from 'redux-saga';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export * from './actions';
export * from './reducers';

export default store;