import React from 'react';
import PasswordChange from 'components/PasswordChange';
import requireAuth from 'config/requireAuth';

const PwChange = () => [
    <PasswordChange/>
];

export default requireAuth(PwChange);