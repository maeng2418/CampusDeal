import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR, EMAIL_NOT_VERIFIED, SIGNOUT_SUCCESS, SIGNOUT_ERROR, RESET_SUCCESS, RESET_ERROR } from "../actionTypes/auth";

const signup = (payload) => ({
    type: SIGNUP_SUCCESS,
    payload
});

const signupError = (payload) => ({
    type: SIGNUP_ERROR,
    payload
});

const signin = () => ({
    type: SIGNIN_SUCCESS
});

const signinError = (payload) => ({
    type: SIGNIN_ERROR,
    payload
});

const emailNotVerified = (payload) => ({
    type: EMAIL_NOT_VERIFIED,
    payload
});

const signout = () => ({
    type: SIGNOUT_SUCCESS
});

const signoutError = (payload) => ({
    type: SIGNOUT_ERROR,
    payload
});

const resetPassword = (payload) => ({
    type: RESET_SUCCESS,
    payload
});

const resetError = (payload) => ({
    type: RESET_ERROR,
    payload
});


const authActionCreators = {
    signup,
    signupError,
    signin,
    signinError,
    emailNotVerified,
    signout,
    signoutError,
    resetPassword,
    resetError
};

export default authActionCreators;