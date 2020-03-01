import React from 'react';
import { withRouter } from 'react-router-dom';
import firebase from "config/firebase";
import EmailLoginBtn from './presenter';

class Container extends React.Component {
  render() {
    this.props.press && this._login(this.props.press);
    return (
      <EmailLoginBtn login={this._login} />
    );
  }

  _login = event => {
    const { email, password } = this.props;
    event.preventDefault();
    this.props.resetPress();
    try {
      this.props.beginApiCall();
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(data => {
          if (data.user.emailVerified) {
            console.log("IF", data.user.emailVerified);
            this.props.signin();
            this.props.handleClose();
            this.props.history.push('/');
          } else {
            console.log("ELSE", data.user.emailVerified);
            this.props.emailNotVerified("You haven't verified your e-mail address.");
          }
        })
        .catch(() => {
          this.props.apiCallError();
          this.props.signinError("Invalid login credentials");
        });
    } catch (err) {
      this.props.apiCallError();
      this.props.signinError("Invalid login credentials");
    }
  };

}

export default withRouter(Container);