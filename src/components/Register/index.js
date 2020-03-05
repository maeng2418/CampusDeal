import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { Form, ToggleButtonGroup, ToggleButton, Button, FormCheck } from 'react-bootstrap';
import axios from 'axios';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: "",
            author: "",
            publisher: "",
            publishDate: "",
            catergory: "",
            price: null,
            method: [],
            imgFile: null,
            imgBase64: "",
        }
    }

    render() {
        console.log(typeof (this.state.imgFile));
        return (
            <div className={styles.registerContainer}>
                <h1 className={styles.registerTitle}>판매등록</h1>
                <Form className={styles.registerForm} onSubmit={this._handleSubmit}>
                    <div className={styles.leftContainer}>
                        <Form.Control className={styles.inputText} type="text" name="bookName" placeholder="교재명" size="lg" onChange={this._handleChange} />
                        <Form.Control className={styles.inputText} type="text" name="author" placeholder="저자" size="lg" onChange={this._handleChange} />
                        <Form.Control className={styles.inputText} type="text" name="publisher" placeholder="출판사" size="lg" onChange={this._handleChange} />
                        <Form.Control className={styles.inputText} type="text" name="publishDate" placeholder="출판연도" size="lg" onChange={this._handleChange} />
                        <Form.Control className={styles.inputText} type="text" name="category" placeholder="분류" size="lg" onChange={this._handleChange} />
                        <Form.Control className={styles.inputText} type="text" name="condition" placeholder="교재 상태" size="lg" onChange={this._handleChange} />
                        <Form.Control className={styles.inputText} type="text" name="price" placeholder="가격" size="lg" onChange={this._handleChange} />
                        <div className={styles.btnToolbar}>
                            <ToggleButtonGroup type="checkbox">
                                <ToggleButton className={styles.methodBtn} name="direct" type="checkbox" value="직거래" onChange={this._handlePush} variant="outline-primary">직거래</ToggleButton>
                            </ToggleButtonGroup>
                            <ToggleButtonGroup type="checkbox">
                                <ToggleButton className={styles.methodBtn} name="post" type="checkbox" value="택배" onChange={this._handlePush} variant="outline-danger">택배</ToggleButton>
                            </ToggleButtonGroup>
                            <ToggleButtonGroup type="checkbox">
                                <ToggleButton className={styles.methodBtn} name="safe" type="checkbox" value="안전거래" onChange={this._handlePush} variant="outline-success">안전거래</ToggleButton>
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
                            <input type="file" name="img" onChange={this._handleChangeFile} />
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

    _handleSubmit = (event) => {
        const formData = new FormData();
        formData.append("uid", "");
        formData.append("bookName", this.state.bookName);
        formData.append("author", this.state.author);
        formData.append("publisher", this.state.publisher);
        formData.append("publishDate", this.state.publishDate);
        formData.append("catergory", this.state.category);
        formData.append("price", Number(this.state.price));
        formData.append("method", this.state.method);
        formData.append("image", this.state.imgFile);
        const config = {
            headers: {'content-type': 'multipart/form-data'}
        };
        event.preventDefault();
        axios.post('mongodb/api/register', formData, config)
        .then(response => { console.log(response) })
        .catch(response => { console.log(response) });
    }

    _handlePush = (e) => {
        var joined = this.state.method.concat(e.target.value);
        this.setState({ ...this.state, method: joined });
    }

    _handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
}

export default Register;