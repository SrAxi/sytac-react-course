import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const chatApi = new ChatApi(); //eslint-disable-line
ReactDOM.render(
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Sytac chat room made with React</h2>
        </div>
        <App chatApi={chatApi}/>
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
