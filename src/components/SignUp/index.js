import React, { Fragment } from 'react';
import styles from './styles.module.scss';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Home from 'components/Home';
import campusList from './campusList';
import { createUserWithEmailAndPassword } from 'firebase.utils';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            name: "",
        };
    }
    render() {
        const {email, password} = this.state;
        const createUser = () => createUserWithEmailAndPassword(email, password);
        return (
            <Fragment>
                <div className={styles.home}>
                    <Home/>
                </div>
                <div className={styles.formContainer}>
                    <Form>
                        <div className={styles.formGroup}>
                            <Form.Control type="email" placeholder="Email" onChange={this._handleChangeEmail}/>
                        </div>

                        <div className={styles.formGroup}>
                            <Form.Control type="password" placeholder="Password" onChange={this._handleChangePassword} />
                        </div>

                        <div className={styles.formGroup}>
                            <Form.Control placeholder="이름" onChange={this._handleChangeName}/>
                        </div>

                        <div className={styles.rowFormGroup}>
                            <div className={styles.state}>
                                <Form.Control as="select">
                                    <option>대한민국 +82</option>
                                    <option>...</option>
                                </Form.Control >
                            </div>
                            <div className={styles.phone}>
                                <Form.Control placeholder="휴대폰번호" />
                            </div>

                            <Button variant="outline-primary" type="submit">
                                인증번호 발송
                        </Button>
                        </div>

                        <div className={styles.formGroup}>
                            <Form.Control as="select">
                                {campusList.map((campus)=><option>{campus}</option>)}
                            </Form.Control >
                        </div>

                        <div className={styles.checkGroup}>
                            <div className={styles.check}>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch1"
                                    label="개인정보 제3자 제공 동의 (필수)"
                                    inline
                                />
                                <Link className={styles.link} to="/">내용보기</Link>
                            </div>

                            <div className={styles.check}>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch2"
                                    label="서비스 이용약관 동의 (필수)"
                                    inline
                                />
                                <Link className={styles.link} to="/">내용보기</Link>
                            </div>


                            <div className={styles.check}>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch3"
                                    label="마케팅 정보 수신동의 (선택)"
                                    inline
                                />
                                <Link className={styles.link} to="/">내용보기</Link>
                            </div>


                        </div>

                        <Button variant="primary" size="lg" block type="submit" onClick={createUser}>
                            동의하고 가입하기
                </Button>
                    </Form>
                </div>
            </Fragment>
        );
    }

    _handleChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }


    _handleChangePassword = (event) => {
        this.setState({password: event.target.value})
    }

    _handleChangeName = (event) => {
        this.setState({name: event.target.value})
    }
}

export default SignUp;