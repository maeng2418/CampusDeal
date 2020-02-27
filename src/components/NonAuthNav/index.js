import React, { Fragment } from 'react';
import LogIn from 'components/LogIn';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const NonAuthNav = () => (
    <Fragment>
        <li className={styles.link}><LogIn /></li>
        <Link to="/signup"><li className={styles.link}>회원가입</li></Link>
    </Fragment>
);


export default NonAuthNav;