import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'client/Root';
import store from "redux/configureStore";
import { Provider } from 'react-redux'; // 리액트 프로젝트에 스토어를 연동 할 때에는 react-redux 라이브러리 안에 들어있는 Provider 라는 컴포넌트를 사용

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>, 
    document.getElementById('root')
);