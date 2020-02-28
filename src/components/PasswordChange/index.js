import React, { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './styles.module.scss';
import { withRouter } from 'react-router-dom';
import firebase from "config/firebase";

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};
class PasswordChangeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    render() {
        const { passwordOne, passwordTwo, error } = this.state;
        const isInvalid = passwordOne !== passwordTwo || passwordOne === '';
        return (
            <Fragment>
                <div className={styles.formContainer}>
                    <Form onSubmit={this._onSubmit}>
                        <div className={styles.formGroup}>
                            <Form.Control name="passwordOne" type="password" placeholder="비밀번호" value={passwordOne} onChange={this._onChange} />
                        </div>
                        <div className={styles.formGroup}>
                            <Form.Control name="passwordTwo" type="password" placeholder="비밀번호 확인" value={passwordTwo} onChange={this._onChange} />
                        </div>
                        <Button variant="primary" size="lg" block type="submit" disabled={isInvalid} >
                            비밀번호 변경하기
                        </Button>
                        {error && alert(error.message)}
                    </Form>
                </div>
            </Fragment>
        );
    }

    _onSubmit = event => {
        const { passwordOne } = this.state;
        firebase.auth().currentUser.updatePassword(passwordOne)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };

    _onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
}
export default withRouter(PasswordChangeForm);