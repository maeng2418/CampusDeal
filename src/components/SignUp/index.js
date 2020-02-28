import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'redux/modules/actions/actionCreators/auth';
import Container from './container';

const mapStateToProps = (state) => {
  return {
      authMsg: state.auth.authMsg,
      auth: state.firebaseReducer.auth,
      loading: state.apiStatusReducer.apiCallsInProgress > 0
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Container); //안쓰는거 null 처리