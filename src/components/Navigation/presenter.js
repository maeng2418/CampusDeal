import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";
import NonAuthNav from "components/NonAuthNav";
import AuthNav from "components/AuthNav";
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
                            { !props.auth.isLoaded ? null : !props.auth.isEmpty ? <AuthNav /> : <NonAuthNav /> }
                            <Link to="/register"><li className={styles.link}>판매등록</li></Link>
                            <li className={styles.link} onClick={props.logOut}>고객센터</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Navigation;