import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider basename="/react-admin-dashboard">
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
