import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './styles.module.scss';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';

const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class LogInBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            show: false,
            error: null,
        };
    }

    render() {
        const { email, password, show, error } = this.state;
        const handleClose = () => this.setState({ ...this.state, show: false });
        const handleShow = () => this.setState({ ...this.state, show: true });
        return (
            <>
                <span onClick={handleShow}>
                    로그인
            </span>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className={styles.modalTitle}>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" size="lg" onChange={this._handleChangeEmail} />
                                <Form.Text className="text-muted">
                                    {email==="" ? <small>이메일을 입력해주세요.</small> : <small>&nbsp;</small>}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" size="lg" onChange={this._handleChangePassword} />
                                <Form.Text className="text-muted">
                                    {password==="" ? <small>비밀번호를 입력해주세요.</small> : <small>&nbsp;</small>}
                                </Form.Text>
                            </Form.Group>


                            <Button className={styles.loginWrapper} variant="outline-success" size="lg" block onClick={this._login}>
                                로그인
                        </Button>
                            <Button className={styles.loginWrapper} variant="outline-primary" size="lg" block onClick={this._facebookLogin}>
                                <img className={styles.facebookBtn} src={require("../../images/facebookSignUp.png")} />페이스북 로그인
                        </Button>
                            <Button className={styles.loginWrapper} variant="outline-danger" size="lg" block onClick={this._googleLogin}>
                                <img className={styles.googleBtn} src={require("../../images/googleSignUp.png")} />구글 로그인
                        </Button>
                        </Form>
                        <div className={styles.signUpAndForget}>
                            <Link to={'/pw-forget'}>비밀번호 찾기</Link>
                            <Link to={'/signup'}>회원가입</Link>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        );
    }

    _handleChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }


    _handleChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }

    _login = event => {
        const { email, password } = this.state;
    
        this.props.firebase
          .doSignInWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({ ...this.state, show:false });
            this.props.history.push('/');
          })
          .catch(error => {
            this.setState({ error });
          });
    
        event.preventDefault();
      };

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
            this.setState({ ...this.state, error: null, show: false });
            this.props.history.push('/');
          })
          .catch(error => {
            if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
              error.message = ERROR_MSG_ACCOUNT_EXISTS;
            }
    
            this.setState({ error });
          });
    
        event.preventDefault();
      };

      _facebookLogin = event => {
        this.props.firebase
          .doSignInWithFacebook()
          .then(socialAuthUser => {
            // Create a user in your Firebase Realtime Database too
            return this.props.firebase.user(socialAuthUser.user.uid).set({
              username: socialAuthUser.additionalUserInfo.profile.name,
              email: socialAuthUser.additionalUserInfo.profile.email,
              roles: {},
            });
          })
          .then(() => {
            this.setState({ ...this.state, error: null, show: false });
            this.props.history.push('/');
          })
          .catch(error => {
            if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
              error.message = ERROR_MSG_ACCOUNT_EXISTS;
            }
    
            this.setState({ error });
          });
    
        event.preventDefault();
      };
}

const LogIn = compose(withRouter, withFirebase)(LogInBase);

export default LogIn;