import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";

const LoginButton = (props) => (
    <li className={styles.link} onClick={props.onClick}>
        로그인
    </li>
);

const LogoutButton = (props) => (
    <li className={styles.link} onClick={props.onClick}>
        로그아웃
    </li>
);

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick = () => {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick = () => {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return (
            <div className={styles.navigation}>
                <div className={styles.navWrapper}>
                    <div className={styles.row}>
                        <div className={styles.colLeft}>
                            <div className={styles.link}>
                                <Link to='/'>
                                    <img src ={require("../../images/logo.png")} className={styles.logo} alt="Logo"/>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.colRight}>
                            <div className={styles.menuBar}>
                                <ul className={styles.menu}>
                                    {button}
                                    {isLoggedIn ? 
                                        <li className={styles.link}><Link to='/about/foo'>마이페이지</Link></li>
                                        :<li className={styles.link}>회원가입</li>
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