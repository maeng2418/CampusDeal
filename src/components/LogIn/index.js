import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import EmailLoginBtn from 'components/EmailLoginBtn';
import GoogleLoginBtn from 'components/GoogleLoginBtn';
import FacebookLoginBtn from 'components/FacebookLoginBtn';

class LogIn extends React.Component {
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
        const { email, password, show } = this.state;
        const handleClose = () => this.setState({ ...this.state, show: false });
        const handleShow = () => this.setState({ ...this.state, show: true });
        const onErrorChange = (error) => this.setState({error: error});
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
                                <Form.Control type="email" placeholder="Email" size="lg" onChange={this._handleEmailChange} />
                                <Form.Text className="text-muted">
                                    {email==="" ? <small>이메일을 입력해주세요.</small> : <small>&nbsp;</small>}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" size="lg" onChange={this._handlePasswordChange} />
                                <Form.Text className="text-muted">
                                    {password==="" ? <small>비밀번호를 입력해주세요.</small> : <small>&nbsp;</small>}
                                </Form.Text>
                            </Form.Group>
                            <EmailLoginBtn email={email} password={password} handleClose={handleClose} onErrorChange={onErrorChange}/>
                            <FacebookLoginBtn handleClose={handleClose} onErrorChange={onErrorChange}/>
                            <GoogleLoginBtn handleClose={handleClose} onErrorChange={onErrorChange}/>
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

    _handleEmailChange = e => {
      this.setState({ email: e.target.value });
    };

    _handlePasswordChange = e => {
        this.setState({ password: e.target.value });
      };
}

export default LogIn;