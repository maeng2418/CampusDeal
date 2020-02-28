import React, { Fragment } from 'react';
import styles from './styles.module.scss';
import { Form, Button } from 'react-bootstrap';
import firebase from "config/firebase";
import Home from 'components/Home';
import { withRouter } from 'react-router-dom';


class PasswordForget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            error: null,
        };
    }

    render() {
        const { email, error } = this.state;
        const isInvalid = email === '';
        return (
            <Fragment>
                <div className={styles.home}>
                    <Home />
                </div>
                <div className={styles.formContainer}>
                    <Form onSubmit={this._onSubmit}>
                        <div className={styles.formGroup}>
                            <Form.Control name="email" type="email" placeholder="Email" value={this.state.email} onChange={this._onChange} />
                        </div>
                        <Button variant="primary" size="lg" block type="submit" disabled={isInvalid} >
                            비밀번호 재설정
                        </Button>
                        {error && alert(error.message)}
                    </Form>
                </div>
            </Fragment>
        );
    }

    _onSubmit = event => {
        const { email } = this.state;
        try{
            firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                this.setState({ email: email, error: null, });
                //this.props.resetPassword("Check your inbox. We've sent you a secured reset link by e-mail.");
                alert("비밀번호가 초기화되었습니다.\n 이메일을 확인해주세요.")
                this.props.history.push('/');
            })
            .catch(() => {
                //this.props.apiCallError();
                //this.props.resetError("Oops, something went wrong we couldn't send you the e-mail. Try again and if the error persists, contact admin.");
            });
        }catch (err) {
            console.log(err);
            this.setState({ err });
            //this.props.apiCallError();
            //this.props.resetError(err);
        }
        event.preventDefault();
    };

    _onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
}

export default withRouter(PasswordForget);
