import React from 'react';
import styles from "./styles.module.scss";

const TestComponent = (props) => (
    <h2 className={styles.testComponent}>
        {props.greeting}, this is test page
    </h2>
);

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {greeting:'Hello'};
    }

    changing = () => {
        this.setState({greeting: 'Fuck'});
    }

    render(){
        const {greeting} = this.state; //const greeting = this.state.greeting;

        return(
            <>
                <h1>{greeting}, This is test page</h1>
                <TestComponent greeting='hello'/>
                <button onClick={this.changing}>눌러주세요</button>
            </>
        );
    }

}

export default Test;