import React, { Fragment } from 'react';
import styles from './styles.module.scss';
import { Form, Button } from 'react-bootstrap';
import { withFirebase } from 'components/Firebase';
import Home from 'components/Home';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

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
        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ email: email, error: null, });
                alert("비밀번호가 초기화되었습니다.\n 이메일을 확인해주세요.")
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
                this.setState({ error });
            });
        event.preventDefault();
    };
    _onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
}

export default compose(withRouter, withFirebase)(PasswordForget);
