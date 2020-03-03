import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './styles.module.scss';

const Book = (props) => (

    <div className={styles.bookContainer}>
        <div className={styles.titleContainer}>
            <div className={styles.bookTitle}>{props.name}</div>
            <div className={styles.registerDate}>{props.date}</div>
        </div>
        <div className={styles.contentContainer}>
            <div className={styles.imgContainer}>
                <img className={styles.bookImg} src={require("images/law.png")} alt={props.img} />
            </div>
            <div className={styles.bookDescContainer}>

                <div className={styles.bookDesc}>정기철 지음 | {props.publisher}</div>
                
                <div className={styles.descMain}>
                    <div className={styles.descTitles}>
                        <ul className={styles.bookDescList}>
                            <li className={styles.bookDesc}>출판연도</li>
                            <li className={styles.bookDesc}>책상태</li>
                            <li className={styles.bookDesc}>거래방법</li>
                            <li className={styles.bookDesc}>판매자</li>
                        </ul>
                    </div>

                    <div className={styles.descContents}>
                        <ul className={styles.bookDesList}>
                            <li className={styles.bookDesc}>2016</li>
                            <li className={styles.bookDesc}>{props.condition}</li>
                            <li className={styles.bookDesc}>직거래, 택배, 기타</li>
                            <li className={styles.bookDesc}>서울과학기술대학교 | {props.author}</li>
                        </ul>
                    </div>
                </div>



            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.price}>{props.price}</div>
                <Button className={styles.cartButton} variant="primary" size="lg" block>장바구니</Button>
                <Button className={styles.buyButton} variant="danger" size="lg" block>구매하기</Button>
            </div>
        </div>
    </div>
);

export default Book;