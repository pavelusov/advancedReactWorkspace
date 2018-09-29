import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';


import reducers from './root-reducer';

const middleWares = [logger];

export default createStore(
  reducers,
  applyMiddleware(...middleWares)
  );
