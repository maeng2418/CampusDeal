import React from 'react';
import styles from "./styles.module.scss";
import axios from 'axios';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: '',
            email: '',
            books: '',
        };
    }

    componentDidMount() {
        axios.get('users/api/customers', {
            // params: { id: 'velopert' } // 'user/?id=velopert' 와 같음
        })
            .then(response => { this.setState({ customers: response.data }) })
            .catch(response => { console.log(response) });

        axios.get('mongodb/books', {
            // params: { id: 'velopert' } // 'user/?id=velopert' 와 같음
        })
            .then(response => { this.setState({ books: response.data }) })
            .catch(response => { console.log(response) });
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/login', {
            email: this.state.email,
        })
            .then(response => { console.log(response) })
            .catch(response => { console.log(response) });
    }

    render() {
        return (
            <div>
                {this.state.customers ? this.state.customers.map(c => {
                    return <div key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}>
                        {c.name}
                    </div>
                }) : ''}
                {this.state.books ? this.state.books.map(c => {
                    return <div key={c.id} id={c.id} author={c.author} book={c.book} publisher={c.publisher} condition={c.condition} price={c.price} image={c.image} date={c.date}>
                        {c.book}
                    </div>
                }) : ''}
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" value={this.state.email} onChange={this._onChange} />
                    <button type="submit">전송</button>
                </form>
            </div>

        );
    }

    _onChange = event => {
        this.setState({ email: event.target.value });
        console.log(this.state.email)
    };
}

export default Test;