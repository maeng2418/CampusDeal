import React from 'react';
import Navigation from './presenter';
import { auth, signOut } from 'firebase.utils';


class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: auth.currentUser,
        }
    };

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({user})
        });
    }

    render(){
        const { user } = this.state;

        return(
            <Navigation 
                user={user}
                signOut={signOut}
                logOut={this._handleLogOut} 
            />
        );
    }

    _handleLogOut = () => {
        const { logOut } = this.props;
        logOut();
    }
}

export default Container;