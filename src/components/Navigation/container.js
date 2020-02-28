import React from 'react';
import Navigation from './presenter';
import { withFirebase } from '../Firebase';


class Container extends React.Component {

  render() {
    return (
      <Navigation auth={this.props.auth} />
    );
  }
}

export default withFirebase(Container);