import React from 'react';
import PasswordChange from 'components/PasswordChange';
import requireAuth from 'config/requireAuth';

const pwChange = () => [
    <PasswordChange/>
];

export default requireAuth(pwChange);