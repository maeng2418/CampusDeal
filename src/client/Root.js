import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';
import './styles.module.scss';

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default Root;