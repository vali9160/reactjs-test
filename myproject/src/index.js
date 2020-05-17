import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from "./App"
import "../node_modules/bootstrap/dist/css/bootstrap.css"



ReactDOM.render(<App /> , document.getElementById('root'));

registerServiceWorker();