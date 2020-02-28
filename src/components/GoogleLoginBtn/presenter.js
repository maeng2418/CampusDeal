import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './styles.module.scss';

const GoogleLoginBtn = (props) => (
    <Button className={styles.loginWrapper} variant="outline-danger" size="lg" block onClick={props.googleLogin}>
        <img className={styles.googleBtn} src={require("../../images/googleSignUp.png")} alt="googleLoginBtn" />구글 로그인
    </Button>

);

export default GoogleLoginBtn;