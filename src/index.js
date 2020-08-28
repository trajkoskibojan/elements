import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'context/context';

const app = (
  <Provider>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
