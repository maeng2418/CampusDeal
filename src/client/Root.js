import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';
import './styles.module.scss';
import { hot } from 'react-hot-loader';

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default hot(module)(Root);