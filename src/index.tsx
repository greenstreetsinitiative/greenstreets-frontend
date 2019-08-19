import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';

ReactDOM.render(
  <App compiler='TypeScript' framework='React' />,
  document.getElementById('example'),
);
