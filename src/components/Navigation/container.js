import React from 'react';
import Navigation from './presenter';


class Container extends React.Component {

  render() {
    return (
      <Navigation auth={this.props.auth} />
    );
  }
}

export default Container;