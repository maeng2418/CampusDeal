import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './styles.module.scss';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose' // higher-order 컴포넌트 깔끔하게 만들어줌. (괄호없이 나열)

const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class GoogleLoginBtn extends React.Component {
    render() {
        return (
            <Button className={styles.loginWrapper} variant="outline-danger" size="lg" block onClick={this._googleLogin}>
                <img className={styles.googleBtn} src={require("../../images/googleSignUp.png")} alt="googleLoginBtn" />구글 로그인
            </Button>
        );
    }

    _googleLogin = event => {
        this.props.firebase
            .doSignInWithGoogle()
            .then(socialAuthUser => {
                // Create a user in your Firebase Realtime Database too
                return this.props.firebase.user(socialAuthUser.user.uid).set({
                    username: socialAuthUser.user.displayName,
                    email: socialAuthUser.user.email,
                    roles: {},
                });
            })
            .then(() => {
                this.props.handleClose();
                this.props.history.push('/');
            })
            .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                    error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }
                this.props.onErrorChange(error);
            });

        event.preventDefault();
    };
}

export default compose(withRouter, withFirebase)(GoogleLoginBtn);