import React from 'react';
import { InputGroup, FormControl, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import styles from './styles.module.scss';

const Search = (props) => (
    <div className={styles.searchBar}>
        <InputGroup className={styles.inputGroup}>
            <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-success"
                title="통합검색"
                id="input-group-dropdown-1"
                className={styles.dropDownButton}
            >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
            <FormControl name="query" aria-describedby="basic-addon1" className={styles.inputBar} value={props.value} onChange={props.handleChange} />
            <InputGroup.Append>
                <Button variant="outline-success" onClick={props.search}>🔍</Button>
            </InputGroup.Append>
        </InputGroup>

    </div>
);

export default Search;