import React from 'react';
import { InputGroup, FormControl, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import styles from './styles.module.scss';

const clicking = () => {
    alert("꺼져");
}

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div className={styles.searchBar}>
                <InputGroup className="mb-3">
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-success"
                        title="통합검색"
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                    <FormControl name="query" aria-describedby="basic-addon1" className={styles.inputBar} value={this.state.value} onChange={this.handleChange}/>
                    <InputGroup.Append>
                        <Button variant="outline-success" onClick={clicking}>🔍</Button>
                    </InputGroup.Append>
                </InputGroup>

            </div>
        )
    }
}

export default Search;