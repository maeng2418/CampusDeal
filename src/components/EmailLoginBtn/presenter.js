import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './styles.module.scss';

const EmailLoginBtn = (props) => (
    <Button className={styles.loginWrapper} variant="outline-success" size="lg" block onClick={props.login}>
        로그인
    </Button>
);

export default EmailLoginBtn;