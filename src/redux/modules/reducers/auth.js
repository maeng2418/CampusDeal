import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR, EMAIL_NOT_VERIFIED, SIGNOUT_SUCCESS, SIGNOUT_ERROR, RESET_SUCCESS, RESET_ERROR } from "../actions/actionTypes/auth";

const INITIAL_STATE = {
    authMsg: "",
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNIN_SUCCESS:
        case SIGNOUT_SUCCESS:
            return { ...state, authMsg: "" };
        case SIGNUP_SUCCESS:
        case SIGNUP_ERROR:
        case SIGNIN_ERROR:
        case EMAIL_NOT_VERIFIED:
        case SIGNOUT_ERROR:
        case RESET_SUCCESS:
        case RESET_ERROR:
            return { ...state, authMsg: action.payload };
        default:
            return state;
    }
}

export default reducer;