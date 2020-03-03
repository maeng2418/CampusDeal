import React from 'react';
import Search from './presenter';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: "",
            category: "통합검색",
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.keywords !== this.state.keywords) {
          console.log('Search bar를 새로 만든다.');
        }
    }

    render() {
        const { keywords, category } = this.state;
        return (
            <Search value={keywords} handleChange={this._handleChange} category={category} handleCategory={this._handleCategory} search={this._handleSearch} />
        );
    }

    _handleCategory = (event) => {
        this.setState({ category: event });
    }

    _handleChange = (event) => {
        this.setState({ keywords: event.target.value });
    }

    _handleSearch = (event) => {
        const { keywords, category, isSearched } = this.state;
        event.preventDefault();
        axios.post('/api/login', {
            email: this.state.email,
        })
            .then(response => { console.log(response) })
            .then(this.props.history.push({ pathname: '/book', search: 'category=' + category + '&keyword=' + keywords }))
            .then(this.setState({keywords:"", category: "통합검색"}))
            .catch(response => console.log(response));
    }
}

export default withRouter(Container);