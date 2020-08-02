import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import thunk from "redux-thunk"
import './index.css';


import App from './App';
import ErrorCheck from './Error';


import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducer from './redux/reducers';

// const thunk = store => next => action =>
//   typeof action === 'function'
//     ? action(store.dispatch, store.getState)
//     : next(action)

const store = createStore(
  combineReducers({
    reducer
  }),
  applyMiddleware(
    thunk,
  )
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorCheck>
        <div className="bg bg-2 default-bg-color h-100">
          <App />
        </div>
      </ErrorCheck>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
