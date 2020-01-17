import React from 'react';
import styles from './styles.module.scss';

const Footer = (props) => (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.smallContainer}>
                        <small>
                        (주) 캠퍼스 딜 | 대표 김명성 | 사업자등록번호 111-82-12345 | 통신판매신고 제2019-서울마포-0000호
                        </small>
                    </div>
                    <div>
                        <small>
                        서울시 노원구 공릉로 154-15 | 고객센터 02-1544-1234 | FAX 050-4130-1234
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;