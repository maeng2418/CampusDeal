import React, {Fragment} from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const Home = (props) => (
    <Fragment>
        <Link className={styles.link} to='/'>
            <img src={require("../../images/logo.png")} className={styles.logo} alt="Logo" />
        </Link>
    </Fragment>
)

export default Home;