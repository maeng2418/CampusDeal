import { combineReducers } from "redux"; // 리듀서가 여러개일대는 redux 의 내장함수인 combineReducers 를 사용하여 리듀서를 하나로 합치는 작업
import { firebaseReducer } from "react-redux-firebase";
import apiCallStatusReducer from './apiStatus';
import auth from './auth';
import search from './search';

export default combineReducers({
    firebaseReducer,
    apiCallStatusReducer,
    auth,
    search,
    // 다른 리듀서 만들게되면 여기에 넣어줌.
});