import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from 'components/Navigation';
import { Home, About, TestPage, Sign, PwForget, Book, Register, MyPage } from 'pages';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path="/signUp" component={Sign} />
                    <Route path='/pw-forget' component={PwForget} />
                    <Navigation />
                </Switch>
                <Route exact path="/" component={Home} /> {/*exact는 주어진 경로와 정확히 맞아 떨어져야함. 없을시, about이나 test가 합쳐짐*/}
                <Switch> {/*exact사용안해도 됨. 단, 순서 맞추어 주어야함. 위에서부터 검사해서 일치하면 리턴*/}
                    <Route path="/about/:name" component={About} />
                    <Route exact path="/about" component={About} />
                </Switch>
                <Route path="/book" component={Book} />
                <Route path="/mypage" component={MyPage}/>
                <Route path="/register" component={Register} />
                <Route path="/test" component={TestPage} />
            </Fragment>
        );
    }
}

export default App;