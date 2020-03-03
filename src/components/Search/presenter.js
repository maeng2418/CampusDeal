import React from 'react';
import { Form, InputGroup, FormControl, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import styles from './styles.module.scss';

const categoryList = ["통합검색", "법학", "경영/경제", "인문", "어문", "사회과학", "자연과학", "공학", "사범", "생활환경", "예체능", "농축산", "의약학"];

const Search = (props) => (
    
    <Form className={styles.searchBar} onSubmit={props.search}>
        <InputGroup className={styles.inputGroup}>
            <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-success"
                title={props.category}
                id="input-group-dropdown-1"
                className={styles.dropDownButton}
            >
                {categoryList.map(category =>
                    <Dropdown.Item eventKey={category} onSelect={props.handleCategory}>{category}</Dropdown.Item>
                )}
            </DropdownButton>
            <FormControl name="query" aria-describedby="basic-addon1" className={styles.inputBar} value={props.value} onChange={props.handleChange} />
            <InputGroup.Append>
                <Button variant="outline-success" type="submit"><span role="img" aria-label="search">🔍</span></Button>
            </InputGroup.Append>
        </InputGroup>

    </Form>
);

export default Search;