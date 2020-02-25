import React from 'react';
import { withFirebase } from 'components/Firebase';
const LogOut = ({ firebase }) => (
    <span onClick={firebase.doSignOut}>
      로그아웃
    </span>
  );

export default withFirebase(LogOut);