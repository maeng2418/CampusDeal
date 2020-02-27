import React from 'react';
import styles from "./styles.module.scss";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { customers: '' };
    }

    componentDidMount() {
        fetch('/api/customers')
            .then(res => res.json())
            .then(res => this.setState({ customers: res }));
    }

    render() {

        return (
            <div>
                {this.state.customers ? this.state.customers.map(c => {
                    return <div key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}>
                        {c.name}
                        </div>
                }) : ''}
            </div>

        );
    }

}

export default Test;