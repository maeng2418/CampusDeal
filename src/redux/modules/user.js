// 액션 타입 정의
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// 액션 생성함수 정의
export const logIn = (token) => ({
    type: LOGIN,
    token
});

export const logOut = () => ({
    type: LOGOUT
});

// 초기 state 값 설정.
const initialState = {
    isLoggedIn: localStorage.getItem("jwt") ? true : false,
    token: localStorage.getItem("jwt")
};

// Reducer는 편집장 같은 역할을 한다. dispatch를 통해 action을 가져오고 현재의 state와 action을 통해 새로운 state를 리턴한다.
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            const { token } = action;
            localStorage.setItem("jwt", token);
            return {
                ...state,
                isLoggedIn : true,
                token: token
            }
        
        case LOGOUT:
            localStorage.removeItem("jwt");
            return {
                isLoggedIn: false
            }
        default:
            return state;
    }
}

const actionCreators = {
    logIn,
    logOut
};

export { actionCreators };

export default reducer;