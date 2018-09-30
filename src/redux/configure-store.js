import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';

import reducers from './root-reducer';

const isDev = (process.env.NODE_ENV === 'development');

const middleWares = [reduxPromise];
if (isDev) {
  middleWares.push(logger);
}

export default ({ initialState = {} }) => {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(...middleWares)
  );
};
