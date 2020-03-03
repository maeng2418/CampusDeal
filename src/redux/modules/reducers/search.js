import { SEARCH } from "../actions/actionTypes/search" ;

// 초기 state 값 설정.
const initialState = {
    keywords : ""
};


// Reducer는 편집장 같은 역할을 한다. dispatch를 통해 action을 가져오고 현재의 state와 action을 통해 새로운 state를 리턴한다.
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            const { keywords } = action;
            console.log(keywords);
            return {
                ...state,
                keywords: keywords,
            }

        default:
            return state;
    }
}

export default reducer;