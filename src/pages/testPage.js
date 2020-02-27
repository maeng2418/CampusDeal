import React from 'react';
import Test from 'components/Test';
import { withAuthorization } from 'components/Firebase';


const Testpage = (props) => [
    <Test/>
];

const condition = authUser => !!authUser; // authUser가 null이 아니면 접근.

export default withAuthorization(condition)(Testpage);