import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";
import Login from "components/Login";
import Home from "components/Home";
import { auth, signOut } from 'firebase.utils';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: auth.currentUser,
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({user})
        });
    }

    render() {
        const {user} = this.state;
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
                                        user ?
                                        <Fragment>
                                            <li className={styles.link} onClick={signOut}>로그아웃</li>
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