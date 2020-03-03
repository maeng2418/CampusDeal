import React from 'react';
import Footer from 'components/Footer';
import Search from 'components/Search';
import BookList from 'components/BookList';

const Book = (props) => [
  <Search location={props.location}/>,
  <BookList location={props.location}/>,
  <Footer/>
];

export default Book;