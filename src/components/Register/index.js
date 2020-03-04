import React from 'react';
import styles from './styles.module.scss';
import { Form, InputGroup, Button } from 'react-bootstrap';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={styles.registerContainer}>
                <h1 className={styles.registerTitle}>판매등록</h1>
                <Form className={styles.registerForm}>
                    <div className={styles.leftContainer}>
                    <Form.Control type="text" name="bookName" placeholder="교재명" size="lg" onChange={this._handleChange} />
                    <Form.Control type="text" name="author" placeholder="지은이" size="lg" onChange={this._handleChange} />
                    <Form.Control type="text" name="publisher" placeholder="출판사" size="lg" onChange={this._handleChange} />
                    <Form.Control type="text" name="publishDate" placeholder="출판연도" size="lg" onChange={this._handleChange} />
                    <Form.Control type="text" name="category" placeholder="분류" size="lg" onChange={this._handleChange} />
                    <InputGroup className="mb-3">
                        <Form.Control type="text" name="method" placeholder="거래방법" size="lg" onChange={this._handleChange} />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">+ 추가</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <FormCheck
                        type="switch"
                        id="custom-switch1"
                        label="판매 약관 동의 (필수)"
                        inline
                        name="privacy"
                        checked={props.check}
                        onClick={props.handleCheck}
                    />
                    <Link className={styles.link} to="/">내용보기</Link>
                    </div>
                    <div className={styles.rightContainer}>
                        <img src={} alt={}/>
                        <Button>교재 이미지 등록</Button>
                        <Button type="submit">판매 들옥하기</Button>
                    </div>
                </Form>
            </div>

        );
    }
}

export default Register;