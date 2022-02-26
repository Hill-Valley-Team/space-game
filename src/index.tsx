import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { RootState } from './store';
import { App } from './components/App';
import { ErrorBoundary } from './components/ErrorBoundary';
import { createAppStore } from 'store/store';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

declare global {
  interface Window {
    __INITIAL_STATE__: RootState;
    __WB_MANIFEST: any;
  }
}


const manifest = self.__WB_MANIFEST;
if (manifest) {
  precacheAndRoute(manifest);
  registerRoute(
    ({ request }) => request.destination === 'image',
    new CacheFirst({
      cacheName: 'images',
      plugins: [
        new CacheableResponsePlugin({
          statuses: [200],
        }),
      ],
    }),
  );
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

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
};
