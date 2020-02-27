import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'redux/modules/user';
import Container from './container';

const mapStateToProps = (state) => {
  return {
      authUser: state.user.authUser,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Container); //안쓰는거 null 처리