import React from 'react';
import Search from './presenter';

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            keywords : "",
            category : "통합검색"
        };
    }

    render(){
        const { keywords, category } = this.state;
        return(
            <Search value={keywords} handleChange={this._handleChange} category={category} handleCategory={this._handleCategory} search={this._handleSearch}/>
        );
    }

    _handleCategory = (event) => {
        this.setState({category: event});
    }

    _handleChange = (event) => {
        this.setState({ keywords: event.target.value });
    }

    _handleSearch = () => {
        const { searching } = this.props;
        const { keywords } = this.state;
        searching(keywords);
        alert(keywords);
        this.setState({
            ...this.state,
            keywords:"",
        });
    }
}

export default Container;