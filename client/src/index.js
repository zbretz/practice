import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter, StaticRouter, BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('app')
);
