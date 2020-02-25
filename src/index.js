import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'client/Root';
import store from "redux/configureStore";
import { Provider } from 'react-redux'; // 리액트 프로젝트에 스토어를 연동 할 때에는 react-redux 라이브러리 안에 들어있는 Provider 라는 컴포넌트를 사용
import Firebase, {FirebaseContext} from 'components/Firebase';

ReactDOM.render(
    <Provider store={store}>
        <FirebaseContext.Provider value={new Firebase()}> {/*Firebase가 한 번만 인스턴스화되고 React의 컨텍스트 API를 통해 React의 컴포넌트 트리에 주입된다는 것을 확신 할 수 있습니다.*/}
            <Root />
        </FirebaseContext.Provider>
    </Provider>, 
    document.getElementById('root')
);