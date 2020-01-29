import React from 'react';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import queryString from 'query-string';

const About = ({location, match}) => {
  const query = queryString.parse(location.search);
  console.log(query);
  const detail = query.detail === 'true';

  return [
    <Navigation/>,
    <div>
      Hello {match.params.name} <br/>
      {detail && 'detail: blahblah'}
    </div>,
    <Footer/>
  ]

};

export default About;