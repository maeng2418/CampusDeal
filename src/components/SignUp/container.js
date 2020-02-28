import React from 'react';
import SignUp from './presenter';
import { withRouter } from 'react-router-dom';
import campusList from './campusList';
import firebase from "config/firebase";

const INITIAL_STATE = {
    email: "",
    password: "",
    name: "",
    phone: "",
    campus: "",
    privacy: false,
    service: false,
    marketing: false,
    error: null,
    isInvalid: true,
};

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    render() {
        const { email, password, name, phone, campus, privacy, service, marketing, error } = this.state;
        const isInvalid = email === '' || password === '' || name === '' || phone === '' || campus === '' || privacy === false || service === false;
        
        return (
            <SignUp onSubmit={this._onSubmit} onChange={this._onChange} campusList={campusList} privacy={privacy} service={service} marketing={marketing} isInvalid={isInvalid} error={error} handleError={this._handleError} />

        );
    }

    _onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state.email)
    };

    _onSubmit = event => {
        const { email, password } = this.props;
        event.preventDefault();
        try {
            this.props.beginApiCall();
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(dataBeforeEmail => {
                firebase.auth().onAuthStateChanged(function(user) {
                    user.sendEmailVerification();
                });
            })
            .then(dataAfterEmail => {
                firebase.auth().onAuthStateChanged(function(user) {
                  if (user) {
                    // Sign up successful
                    this.props.singup("Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox.");
                  } else {
                    // Signup failed
                    this.props.signupError("Something went wrong, we couldn't create your account. Please try again.");
                  }
                });
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push('/'); // 성공적인 가입 후 사용자를 리디렉션
            })
            .catch(() => {
                this.props.apiCallError();
                this.props.signupError("Something went wrong, we couldn't create your account. Please try again.");
                
            });
          } catch (err) {
            this.props.apiCallError();
            this.props.signupError("Something went wrong, we couldn't create your account. Please try again.");
            this.setState({ err });
        }
    };

    _handlePrivacy = () => this.setState({ ...this.state, privacy: !this.state.privacy })
    _handleService = () => this.setState({ ...this.state, service: !this.state.service })
    _handleMarketing = () => this.setState({ ...this.state, marketing: !this.state.marketing })

    _handleError = (error) => {
        alert(error.message);
        window.location.reload();
    }
}

export default withRouter(Container);