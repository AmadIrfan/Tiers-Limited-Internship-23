import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Context } from './Components/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Context>

      <App />
    </Context>
  </BrowserRouter>
);
