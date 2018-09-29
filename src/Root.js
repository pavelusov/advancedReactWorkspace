import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/configure-store';

/**
 * @function Root
 * @param props - React props
 * @returns {Provider} - Provider wrapper
 */
export default function Root({children, initialState = {}}) {
  return (
    <Provider store={store({initialState})}>
      {children}
    </Provider>
  )
}
