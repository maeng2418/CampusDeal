import React from 'react';
import PasswordChange from 'components/PasswordChange';
import { withAuthorization } from 'components/Firebase';

const pwChange = () => [
    <PasswordChange/>
];

const condition = authUser => !!authUser; // authUser가 null이 아니면 접근.
export default withAuthorization(condition)(pwChange);