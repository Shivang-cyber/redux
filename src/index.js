import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<Provider store={store}>
  <App />
</Provider>,);
