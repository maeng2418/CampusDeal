import React from 'react';
import styles from './styles.module.scss';
import axios from 'axios';
import Book from 'components/Book';
import queryString from 'query-string';

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: null,
        }
    }

    componentDidMount() {

        axios.get('mongodb/books', {
            // params: { id: 'velopert' } // 'user/?id=velopert' 와 같음
        })
            .then(response => { this.setState({ books: response.data }) })
            .catch(response => { console.log(response) });
    }

    render() {
        const query = queryString.parse(this.props.location.search);
        return (
            <div className={styles.bookListContainer}>
                {/* <div>{query.category}<br/>{query.keyword}</div> */}
                {this.state.books ? this.state.books.map(book =>
                    (<Book date={book.date} name={book.book} img={book.img} publisher={book.publisher} condition={book.condition} author={book.author} price={book.price}/>)
                ) : ''}
            </div>
        );
    }
}

export default BookList;