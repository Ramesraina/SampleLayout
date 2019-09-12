import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
// import '@coreui/icons/css/coreui-icons.min.css'; 
import './assets/scss/style.css';

ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('app'));