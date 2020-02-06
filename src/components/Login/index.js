import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './styles.module.scss';

// sign-in.component.jsx 파일
import { signInWithGoogle, signInWithFacebook } from 'firebase.utils';

function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <Form.Control type="email" placeholder="Email" size="lg"/>
                            <Form.Text className="text-muted">
                                <small>이메일을 입력해주세요.</small>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" size="lg"/>
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="로그인상태 유지" />
                        </Form.Group>
                        <Button className={styles.loginWrapper} variant="outline-success" size="lg" block onClick={handleClose}>
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

export default Login;