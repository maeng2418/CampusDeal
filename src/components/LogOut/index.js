import React from 'react';
import { withFirebase } from 'components/Firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'redux/modules/user';

const LogOut = ({ firebase, logOut }) => (
    <span onClick={() => {firebase.doSignOut(); logOut();}}>
      로그아웃
    </span>
);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default withFirebase(connect(null, mapDispatchToProps)(LogOut));