import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import allReducers from './reducers'; //reducers combined
import { Provider } from 'react-redux'; // connects the store with the entire App

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
// the 2nd param is to use a Redux Dev tool, to check store into the navigator
// https://github.com/zalmoxisus/redux-devtools-extension

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
