import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import './assets/scss/argon-design-system-react.scss'; 

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));

if (module.hot) { 
  module.hot.accept(); 
}

serviceWorker.unregister();
