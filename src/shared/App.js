import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from 'components/Navigation';
import { Home, About, TestPage, Sign } from 'pages';
import { auth } from 'firebase.utils';

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: window.localStorage.getItem('user'),
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ user: window.localStorage.getItem('user')});
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
        window.localStorage.clear();
    }
    
    render() {
        const { user } = this.state;
        return (
            <Fragment>
                <Navigation currentUser={user} />
                <Route exact path="/" component={Home} /> {/*exact는 주어진 경로와 정확히 맞아 떨어져야함. 없을시, about이나 test가 합쳐짐*/}
                <Switch> {/*exact사용안해도 됨. 단, 순서 맞추어 주어야함. 위에서부터 검사해서 일치하면 리턴*/}
                    <Route path="/about/:name" component={About} />
                    <Route path="/about" component={About} />
                </Switch>
                <Route path="/signUp" component={Sign} />
                <Route path="/test" component={TestPage} />
            </Fragment>
        );
    }
}

export default App;