import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose' // higher-order 컴포넌트 깔끔하게 만들어줌. (괄호없이 나열)
import { withFirebase } from 'components/Firebase';
import EmailLoginBtn from './presenter';

class Container extends React.Component {
    render(){
        this.props.press && this._login(this.props.press);
        return(
            <EmailLoginBtn login={this._login}/>
        );
    }

    _login = event => {
        const { email, password } = this.props;
        this.props.firebase
          .doSignInWithEmailAndPassword(email, password)
          .then((authUser) => {
            this.props.handleClose();
            this.props.history.push('/');
          })
          .catch(error => {
            console.log(error);
            this.props.onErrorChange(error);
            alert(error.message);
          });
    
        event.preventDefault();
        this.props.resetPress();
      };
}

export default compose(withRouter, withFirebase)(Container);