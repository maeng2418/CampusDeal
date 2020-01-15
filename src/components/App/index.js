import React from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation';
import Search from '../Search';
import Group from '../Group';
import './styles.module.scss';

const App = (props) => [
  <Navigation/>,
  <Search/>,
  <Group/>,
  <Footer/>
];

export default App;
