import React from 'react';
import Search from './presenter';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: queryString.parse(this.props.location.search).keyword === undefined ? "" : queryString.parse(this.props.location.search).keyword,
            category: queryString.parse(this.props.location.search).category === undefined ? "통합검색" : queryString.parse(this.props.location.search).category,
        };
    }

    render() {
        const { keyword, category } = this.state;
        return (
            <Search value={keyword} handleChange={this._handleChange} category={category} handleCategory={this._handleCategory} />
        );
    }

    _handleCategory = (event) => {
        this.setState({ category: event });
    }

    _handleChange = (event) => {
        this.setState({ keyword: event.target.value });
    }
}

export default withRouter(Container);