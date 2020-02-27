import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from 'components/Firebase';

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {   

    constructor(props){
      super(props);
      this.state={
        token: null
      }
    }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          !condition(authUser) 
          ? this.props.history.push('/') // 유저가 null 값이면 로그인으로 유도.
          : this.setState({token: authUser})
        },
      );
    }

    componentWillUnmount(){
      this.listener();
    }

    render() { //보호되어야할 페이지
      const token = this.state.token;
      return (
          token ? <Component {...this.props} /> : null
      );
    }
  }
  return compose(
    withRouter,
    withFirebase,
  )(WithAuthorization);
};

export default withAuthorization;