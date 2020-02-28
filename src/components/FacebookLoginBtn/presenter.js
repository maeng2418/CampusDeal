import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './styles.module.scss';

const FacebookLoginBtn = (props) => (
    <Button className={styles.loginWrapper} variant="outline-primary" size="lg" block onClick={props.facebookLogin}>
        <img className={styles.facebookBtn} src={require("../../images/facebookSignUp.png")} alt="FacebookLoginBtn" />페이스북 로그인
    </Button>
);

export default FacebookLoginBtn;