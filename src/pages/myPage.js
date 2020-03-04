import React from 'react';
import TabView from 'components/TabView';
import requireAuth from 'config/requireAuth';

const PwChange = () => [
    <TabView/>
];

export default requireAuth(PwChange);