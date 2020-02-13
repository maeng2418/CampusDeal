import React from 'react';
import Search from './presenter';

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            keywords : "",
        };
    }

    render(){
        const { keywords } = this.state;
        return(
            <Search value={keywords} handleChange={this._handleChange} search={this._handleSearch}/>
        );
    }

    _handleChange = (event) => {
        this.setState({ keywords: event.target.value })
    }

    _handleSearch = () => {
        const { searching } = this.props;
        const { keywords } = this.state;
        searching(keywords);
        alert(keywords);
        this.setState({
            keywords:"",
        });
    }
}

export default Container;