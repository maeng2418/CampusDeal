import { SEARCH } from '../actionTypes/search';

const searching = (keywords) => ({
    type: SEARCH,
    keywords
});

const searchActionCreators = {
    searching,
};

export default searchActionCreators;