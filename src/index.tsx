import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createAppStore, RootState } from './store';
import { App } from './components/App';
import { ErrorBoundary } from './components/ErrorBoundary';

declare global {
  interface Window {
    __INITIAL_STATE__: RootState;
  }
}

const initialState = window.__INITIAL_STATE__;

const store = createAppStore(initialState);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
);
