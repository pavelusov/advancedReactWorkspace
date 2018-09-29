/* Точка входа нашего приложения */
import React from 'react';
import ReactDOM from 'react-dom';

// Provider wrapper of redux store
import Root from './Root';

// "App" component
import App from 'components/App';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);
