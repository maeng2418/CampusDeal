import React from 'react';
import styles from './styles.module.scss';

const GroupIcon = (props) => (
    <div className={styles.icon}>
        <a className={styles.link} href={props.url}>
            <img className={styles.image}src={props.image} alt="#"></img>
            <div className={styles.title}>{props.title}</div>
        </a>
    </div>
);

export default GroupIcon;