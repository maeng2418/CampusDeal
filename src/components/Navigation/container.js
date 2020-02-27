import React from 'react';
import Navigation from './presenter';
import { withFirebase } from '../Firebase';


class Container extends React.Component {
  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser && this.props.logIn(JSON.parse(JSON.stringify(authUser)));
      },
    );
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Navigation isLoggedIn={this.props.isLoggedIn} />
    );
  }
}

export default withFirebase(Container);