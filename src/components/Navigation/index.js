import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";
import Login from "components/Login";
import Home from "components/Home";
import { signOutWithGoogle } from 'firebase.utils';

class Navigation extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { currentUser } = this.props;

        return (
            <div className={styles.navigation}>
                <div className={styles.navWrapper}>
                    <div className={styles.row}>
                        <div className={styles.colLeft}>
                            <Home />
                        </div>
                        <div className={styles.colRight}>
                            <div className={styles.menuBar}>
                                <ul className={styles.menu}>
                                    {
                                        currentUser ?
                                        <Fragment>
                                            <li className={styles.link} onClick={signOutWithGoogle}>로그아웃</li>
                                            <li className={styles.link}>마이페이지</li>
                                        </Fragment>
                                        :
                                        <Fragment>
                                            <li className={styles.link}><Login /></li>
                                            <Link to="/signup"><li className={styles.link}>회원가입</li></Link>
                                        </Fragment>
                                    }

                                    <li className={styles.link}>장바구니</li>
                                    <li className={styles.link}>고객센터</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Navigation;