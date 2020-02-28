import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import authActionCreators from 'redux/modules/actions/actionCreators/auth';
import apiStatusActionCreators from 'redux/modules/actions/actionCreators/apiStatus';
import Container from './container';

const mapStateToProps = (state) => {
  return {
      authMsg: state.auth.authMsg,
      auth: state.firebaseReducer.auth,
      //loading: state.apiStatusReducer.apiCallsInProgress > 0
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, authActionCreators, apiStatusActionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Container);