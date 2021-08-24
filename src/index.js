import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Account from "./myAccount";

ReactDOM.render(
  <React.StrictMode>
    <Account />
  </React.StrictMode>,
  document.getElementById("acco")
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);