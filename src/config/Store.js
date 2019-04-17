import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { createLogger } from 'redux-logger';

import Reducers from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  const log = createLogger({
    predicate: (getState, action) => action.type !== 'Navigation/COMPLETE_TRANSITION',
    collapsed: (getState, action, logEntry) => !logEntry.error,
  });
  middlewares.push(log);
}

const store = createStore(Reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
