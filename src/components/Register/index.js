import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { Form, ToggleButtonGroup, ToggleButton, Button, FormCheck } from 'react-bootstrap';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgFile: null,
            imgBase64: "",
        }
    }

    render() {
        return (
            <div className={styles.registerContainer}>
                <h1 className={styles.registerTitle}>판매등록</h1>
                <Form className={styles.registerForm}>
                    <div className={styles.leftContainer}>
                        <Form.Control className={styles.inputText} type="text" name="bookName" placeholder="교재명" size="lg" onChange={this._handleChange} />
                        <Form.Control className={styles.inputText} type="text" name="author" placeholder="저자" size="lg" onChange={this._handleChange} />
                        <Form.Control className={styles.inputText} type="text" name="publisher" placeholder="출판사" size="lg" onChange={this._handleChange} />
                        <Form.Control className={styles.inputText} type="text" name="publishDate" placeholder="출판연도" size="lg" onChange={this._handleChange} />
                        <Form.Control className={styles.inputText} type="text" name="category" placeholder="분류" size="lg" onChange={this._handleChange} />
                        <div className={styles.btnToolbar}>
                            <ToggleButtonGroup type="checkbox">
                                <ToggleButton className={styles.methodBtn} type="checkbox" active={true} variant="outline-primary">직거래</ToggleButton>
                            </ToggleButtonGroup>
                            <ToggleButtonGroup type="checkbox">
                                <ToggleButton className={styles.methodBtn} type="checkbox" variant="outline-danger">택배</ToggleButton>
                            </ToggleButtonGroup>
                            <ToggleButtonGroup type="checkbox">
                                <ToggleButton className={styles.methodBtn} type="checkbox" variant="outline-success">안전거래</ToggleButton>
                            </ToggleButtonGroup>
                        </div>

                        <div className={styles.checkGroup}>
                            <FormCheck
                                type="switch"
                                id="custom-switch1"
                                label="판매 약관 동의 (필수)"
                                inline
                                name="privacy"
                                checked={this.props.check}
                                onClick={this.props.handleCheck}
                            />
                            <Link className={styles.link} to="/">내용보기</Link>
                        </div>


                    </div>
                    <div className={styles.rightContainer}>
                        <div className={styles.imgContainer}>
                            {this.state.imgFile && <img src={this.state.imgBase64} alt={this.state.imgFile} />}
                        </div>
                        <label className={styles.customFileUpload}>
                            <input type="file" onChange={this._handleChangeFile} />
                            교재 이미지 등록
                        </label>
                        <Button type="submit">판매 등록하기</Button>
                    </div>
                </Form>
            </div>

        );
    }

    _handleChangeFile = (event) => {
        let reader = new FileReader();
        reader.onloadend = () => {
            // 2. 읽기가 완료되면 아래코드가 실행됩니다.
            if (reader.result) {
                this.setState({ ...this.state, imgBase64: reader.result.toString() }); // 파일 base64 상태 업데이트
            }
        }
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
            this.setState({ ...this.state, imgFile: event.target.files[0] }); // 파일 상태 업데이트
        }
    }
}

export default Register;