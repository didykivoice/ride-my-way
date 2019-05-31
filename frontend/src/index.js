import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Nav />, document.getElementById('nav'));

serviceWorker.register();
