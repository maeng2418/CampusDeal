import React from 'react';
import styles from "./styles.module.scss";

const Navigation = (props) => (
    <div className={styles.navigation}>
        <div className={styles.navWrapper}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.link}>
                        <img src ={require("../../images/logo.png")} class="logo" alt="Logo"/>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.menuBar}>
                        <ul className={styles.menu}>
                            <li className={styles.link}>로그인</li>
                            <li className={styles.link}>회원가입</li>
                            <li className={styles.link}>장바구니</li>
                            <li className={styles.link}>고객센터</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>

);

export default Navigation;