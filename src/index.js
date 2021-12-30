import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

// JSX Code imported from App file
const myelement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// browser is result of this code line executing
// Parameter 1 is rendered in place of Parameter 2
ReactDOM.render(myelement, document.getElementById('root'));
