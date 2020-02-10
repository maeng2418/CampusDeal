// 나의 스토어를 설정/구성 (여러 리듀서를 한번에 모아서 관리)
import { createStore } from 'redux';
// 루트 리듀서 불러오기
import rootReducer from 'redux/modules';

const env = process.env.NODE_ENV;

let store;
// 리덕스 개발자도구 적용
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  if(env === 'development') {
    store = initialState => 
        createStore(rootReducer, devTools);
} else {
    store = initialState => 
        createStore(rootReducer, devTools)
}

export default store();