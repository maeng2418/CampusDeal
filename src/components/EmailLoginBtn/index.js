import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './styles.module.scss';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose' // higher-order 컴포넌트 깔끔하게 만들어줌. (괄호없이 나열)
import { withFirebase } from '../Firebase';

class EmailLoginBtn extends React.Component {
    render(){
        return(
            <Button className={styles.loginWrapper} variant="outline-success" size="lg" block onClick={this._login}>
                로그인
            </Button>
        );
    }

    _login = event => {
        const { email, password } = this.props;
        this.props.firebase
          .doSignInWithEmailAndPassword(email, password)
          .then(() => {
            this.props.handleClose();
            this.props.history.push('/');
          })
          .catch(error => {
            console.log(error);
            this.props.onErrorChange(error);
          });
    
        event.preventDefault();
      };
}

export default compose(withRouter, withFirebase)(EmailLoginBtn);