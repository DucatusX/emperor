import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';
import ScollToTop from './ScollToTop';
import Modal from "react-modal";

Modal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScollToTop>
        <App/>
      </ScollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
