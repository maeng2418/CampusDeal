import React, { Fragment } from 'react';
import LogOut from 'components/LogOut';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const AuthNav = () => (
    <Fragment>
        <li className={styles.link}><LogOut /></li>
        <Link to="/mypage"><li className={styles.link}>마이페이지</li></Link>
    </Fragment>
);


export default AuthNav;