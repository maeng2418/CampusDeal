import React, { Fragment } from 'react';
import styles from './styles.module.scss';
import { Form, Button, FormCheck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Home from 'components/Home';

const SignUp = (props) => (

    <Fragment>
        <div className={styles.home}>
            <Home />
        </div>
        <div className={styles.formContainer}>
            <Form onSubmit={props.onSubmit}>
                <div className={styles.formGroup}>
                    <Form.Control name="email" type="email" placeholder="Email" onChange={props.onChange} />
                </div>

                <div className={styles.formGroup}>
                    <Form.Control name="password" type="password" placeholder="Password" onChange={props.onChange} />
                </div>

                <div className={styles.formGroup}>
                    <Form.Control name="name" placeholder="이름" onChange={props.onChange} />
                </div>

                <div className={styles.rowFormGroup}>
                    <div className={styles.state}>
                        <Form.Control as="select">
                            <option>대한민국 +82</option>
                            <option>...</option>
                        </Form.Control >
                    </div>
                    <div className={styles.phone}>
                        <Form.Control placeholder="휴대폰번호" name="phone" onChange={props.onChange} />
                    </div>

                    <Button variant="outline-primary" type="submit">
                        인증번호 발송
                        </Button>
                </div>

                <div className={styles.formGroup}>
                    <Form.Control as="select" name="campus" onChange={props.onChange}>
                        <option>{'대학교'}</option>
                        {props.campusList.map((campus) => <option>{campus}</option>)}
                    </Form.Control >
                </div>

                <div className={styles.checkGroup}>
                    <div className={styles.check}>
                        <FormCheck
                            type="switch"
                            id="custom-switch1"
                            label="개인정보 제3자 제공 동의 (필수)"
                            inline
                            name="privacy"
                            checked={props.privacy}
                            onClick={props.handlePrivacy}
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
                            checked={props.service}
                            onClick={props.handleService}
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
                            checked={props.marketing}
                            onClick={props.handleMarketing}
                        />
                        <Link className={styles.link} to="/">내용보기</Link>
                    </div>
                </div>

                <Button variant="primary" size="lg" block type="submit" disabled={props.isInvalid} >
                    동의하고 가입하기
                </Button>
                {props.error && props.handleError(props.error)}
            </Form>
        </div>
    </Fragment>
);

export default SignUp;