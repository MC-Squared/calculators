import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import DateCalculatorApp from './date_calculator/date_calculator_app';

console.log(window.location.hostname);
switch(window.location.hostname) {
  case 'localhost':
    ReactDOM.render(<DateCalculatorApp />, document.getElementById('root'));
    break;
  default:
    ReactDOM.render(<App />, document.getElementById('root'));
    break;
}

registerServiceWorker();
