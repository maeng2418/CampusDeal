import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './styles.module.scss';

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
                        <Button variant="danger" size="lg" block onClick={handleClose}>
                            로그인
                        </Button>
                        <Button variant="primary" size="lg" block onClick={handleClose}>
                            페이스북 로그인
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Login;