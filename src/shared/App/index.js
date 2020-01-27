import React from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import Search from '../../components/Search';
import Group from '../../components/Group';
import './styles.module.scss';

const App = (props) => [
  <Navigation/>,
  <Search/>,
  <Group/>,
  <Footer/>
];

export default App;
