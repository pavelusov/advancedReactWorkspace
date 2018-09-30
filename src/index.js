/* Точка входа нашего приложения */
import React from 'react';
import ReactDOM from 'react-dom';

// react router
import { BrowserRouter, Route } from 'react-router-dom';

// Provider wrapper of redux store
import Root from './Root';

// "App" component
import App from 'components/App';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route
        path='/'
        component={App}
      />
    </BrowserRouter>
  </Root>,
  document.getElementById('root')
);
