import React from 'react';
import { withRouter } from 'react-router-dom';
import firebase from "config/firebase";
import GoogleLoginBtn from './presenter';

class Container extends React.Component {
    render() {
        return (
            <GoogleLoginBtn googleLogin={this._googleLogin}/>
        );
    }

    _googleLogin = event => {
        event.preventDefault();
        try {
          this.props.beginApiCall();
          firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(() => {
              this.props.signin();
              this.props.handleClose();
              this.props.history.push('/');
            })
            .catch(error => {
              this.props.onErrorChange(error);
              this.props.apiCallError();
              this.props.signinError("Invalid login credentials");
            });
        }
        catch (err) {
          this.props.apiCallError();
          this.props.signinError("Invalid login credentials");
        }
      };
}

export default withRouter(Container);