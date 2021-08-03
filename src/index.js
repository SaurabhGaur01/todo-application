import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import rootReducer from './reducers/index';
import Content from './components/Content/Content';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer,
);

ReactDOM.render(
  <Provider store={store}>
    <Content />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
