import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './styles.module.scss';
import { signInWithGoogle, signInWithFacebook, signInWithEmailAndPassword } from 'firebase.utils';

const LoginModal = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const signIn = () => signInWithEmailAndPassword(props.email, props.password);
    
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
                            <Form.Control type="email" placeholder="Email" size="lg" onChange={props.handleChangeEmail}/>
                            <Form.Text className="text-muted">
                                <small>이메일을 입력해주세요.</small>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" size="lg" onChange={props.handleChangePassword}/>
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="로그인상태 유지" />
                        </Form.Group>
                        <Button className={styles.loginWrapper} variant="outline-success" size="lg" block onClick={signIn}>
                            로그인
                        </Button>
                        <Button className={styles.loginWrapper} variant="outline-primary" size="lg" block onClick={signInWithFacebook}>
                            <img className={styles.facebookBtn} src={require("../../images/facebookSignUp.png")}/>페이스북 로그인
                        </Button>
                        <Button className={styles.loginWrapper} variant="outline-danger" size="lg" block onClick={signInWithGoogle}>
                            <img className={styles.googleBtn} src={require("../../images/googleSignUp.png")}/>구글 로그인
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    render() {
        const {email, password} = this.state;
        return(
            <LoginModal email={email} password={password} handleChangeEmail={this._handleChangeEmail} handleChangePassword={this._handleChangePassword}/>
        );
    }

    _handleChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }


    _handleChangePassword = (event) => {
        this.setState({password: event.target.value})
    }
}

export default Login;