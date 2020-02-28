import React, { Fragment } from 'react';
import styles from './styles.module.scss';
import { Form, Button, FormCheck } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import Home from 'components/Home';
import campusList from './campusList';
import { withFirebase } from 'components/Firebase';
import { compose } from 'recompose' // higher-order 컴포넌트 깔끔하게 만들어줌. (괄호없이 나열)

const INITIAL_STATE = {
    email: "",
    password: "",
    name: "",
    phone: "",
    campus: "",
    privacy: false,
    service: false,
    marketing: false,
    error: null,
    isInvalid: true,
};

class SignUpBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    render() {
        const { email, password, name, phone, campus, privacy, service, marketing, error } = this.state;
        const isInvalid = email === '' || password === '' || name === '' || phone === '' || campus === '' || privacy === false || service === false;
        return (
            <Fragment>
                <div className={styles.home}>
                    <Home />
                </div>
                <div className={styles.formContainer}>
                    <Form onSubmit={this._onSubmit}>
                        <div className={styles.formGroup}>
                            <Form.Control name="email" type="email" placeholder="Email" onChange={this._onChange} />
                        </div>

                        <div className={styles.formGroup}>
                            <Form.Control name="password" type="password" placeholder="Password" onChange={this._onChange} />
                        </div>

                        <div className={styles.formGroup}>
                            <Form.Control name="name" placeholder="이름" onChange={this._onChange} />
                        </div>

                        <div className={styles.rowFormGroup}>
                            <div className={styles.state}>
                                <Form.Control as="select">
                                    <option>대한민국 +82</option>
                                    <option>...</option>
                                </Form.Control >
                            </div>
                            <div className={styles.phone}>
                                <Form.Control placeholder="휴대폰번호" name="phone" onChange={this._onChange} />
                            </div>

                            <Button variant="outline-primary" type="submit">
                                인증번호 발송
                        </Button>
                        </div>

                        <div className={styles.formGroup}>
                            <Form.Control as="select" name="campus" onChange={this._onChange}>
                                <option>{'대학교'}</option>
                                {campusList.map((campus) => <option>{campus}</option>)}
                            </Form.Control >
                        </div>

                        <div className={styles.checkGroup}>
                            <div className={styles.check }>
                                <FormCheck
                                    type="switch"
                                    id="custom-switch1"
                                    label="개인정보 제3자 제공 동의 (필수)"
                                    inline
                                    name="privacy"
                                    checked={privacy}
                                    onClick={() => this.setState({ ...this.state, privacy: !privacy })}
                                />
                                <Link className={styles.link} to="/">내용보기</Link>
                            </div>

                            <div className={styles.check}>
                                <FormCheck
                                    type="switch"
                                    id="custom-switch2"
                                    label="서비스 이용약관 동의 (필수)"
                                    inline
                                    name="service"
                                    checked={service}
                                    onClick={() => this.setState({ ...this.state, service: !service })}
                                />
                                <Link className={styles.link} to="/">내용보기</Link>
                            </div>

                            <div className={styles.check}>
                                <FormCheck
                                    type="switch"
                                    id="custom-switch3"
                                    label="마케팅 정보 수신동의 (선택)"
                                    inline
                                    name="marketing"
                                    checked={marketing}
                                    onClick={() => this.setState({ ...this.state, marketing: !marketing })}
                                />
                                <Link className={styles.link} to="/">내용보기</Link>
                            </div>
                        </div>

                        <Button variant="primary" size="lg" block type="submit" disabled={isInvalid} >
                            동의하고 가입하기
                        </Button>
                        {error && this._handleError(error)}
                    </Form>
                </div>
            </Fragment>
        );
    }

    _onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state.email)
    };

    _onSubmit = event => {
        const { name, email, password } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase.user(authUser.user.uid).set({
                  name,
                  email,
                });
              })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push('/'); // 성공적인 가입 후 사용자를 리디렉션
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };

    _handleError = (error) => {
        alert(error.message);
        window.location.reload();
    }
}

const SignUp = compose(withRouter, withFirebase)(SignUpBase); // 성공적인 가입 후 사용자를 리디렉션

export default SignUp;