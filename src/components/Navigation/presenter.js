import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";
import LogIn from "components/LogIn";
import LogOut from "components/LogOut";
import Home from "components/Home";

const Navigation = (props) => (
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
                                props.user ?
                                    <Fragment>
                                        <li className={styles.link}><LogOut/></li>
                                        <Link to="/test"><li className={styles.link}>마이페이지</li></Link>
                                    </Fragment>
                                    :
                                    <Fragment>
                                        <li className={styles.link}><LogIn /></li>
                                        <Link to="/signup"><li className={styles.link}>회원가입</li></Link>
                                    </Fragment>
                            }

                            <Link to="/about"><li className={styles.link}>장바구니</li></Link>
                            <li className={styles.link} onClick={props.logOut}>고객센터</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Navigation;