import React from 'react';
import Footer from 'components/Footer';
import queryString from 'query-string';

const About = ({location, match}) => {
  const query = queryString.parse(location.search);
  console.log(query);
  const detail = query.detail === 'true';

  return [
    <div>
      Hello {match.params.name} <br/>
      {query.temp}
      {detail && 'detail: blahblah'}
    </div>,
    <Footer/>
  ]

};

export default About;