// 나의 스토어를 설정/구성 (여러 리듀서를 한번에 모아서 관리)
import { createStore, applyMiddleware, compose } from 'redux';
// 루트 리듀서 불러오기
import rootReducer from 'redux/modules/reducers';
// redux-thunk 불러오기
import reduxThunk from "redux-thunk";
// ENHANCING STORE WITH FIREBASE
import { reactReduxFirebase } from "react-redux-firebase";
import firebase from 'config/firebase';

const env = process.env.NODE_ENV;

// 리덕스 개발자도구 적용
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const createStoreWithFirebase = compose(reactReduxFirebase(firebase), devTools)(
  createStore
);

let store;

if (env === 'development') {
  store = createStoreWithFirebase(
    rootReducer,
    {},
    applyMiddleware(reduxThunk),
  );
} else {
  store = createStoreWithFirebase(
    rootReducer,
    {},
    applyMiddleware(reduxThunk),
  );
}

export default store;