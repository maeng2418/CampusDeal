import React from 'react';
import Navigation from './presenter';
import { withFirebase } from '../Firebase';


class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: null,
        }
    };

    componentDidMount() {
        this.props.firebase.auth.onAuthStateChanged(user => {
            this.setState({user})
        });
    }

    render(){
        const { user } = this.state;

        return(
            <Navigation 
                user={user}
            />
        );
    }
}

export default withFirebase(Container);