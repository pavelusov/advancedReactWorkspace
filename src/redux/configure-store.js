import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';

import asyncMiddleware from '../middlewares/async';
import dataValidator from '../middlewares/data-validator';
import reducers from './root-reducer';

const isDev = (process.env.NODE_ENV === 'development');

const middleWares = [asyncMiddleware, dataValidator];
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
