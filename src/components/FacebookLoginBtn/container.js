import React from 'react';
import { withRouter } from 'react-router-dom';
import firebase from "config/firebase";
import FacebookLoginBtn from './presenter';

class Container extends React.Component {
  render() {
    return (
      <FacebookLoginBtn facebookLogin={this._facebookLogin}/>
    );
  }

  _facebookLogin = event => {
    event.preventDefault();
    try {
      this.props.beginApiCall();
      firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
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