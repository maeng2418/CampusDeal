import React from 'react';
import firebase from "config/firebase";
import LogOut from './presenter';

class Container extends React.Component {
    render(){
        return(
            <LogOut logout={this._logOut}/>
        );
    }

    _logOut = () => {
        try {
            this.props.beginApiCall();
            firebase.auth().signOut()
            .then(() => { this.props.signout(); })
            .catch(() => {
                //this.props.apiCallError();
                //this.props.signoutError("Error, we were not able to log you out. Please try again.");
            });
        }
        catch (err) {
            //this.props.apiCallError();
            //this.props.signoutError("Error, we were not able to log you out. Please try again.");
        }
    }
}

export default Container;