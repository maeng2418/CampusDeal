import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import searchActionCreators from 'redux/modules/actions/actionCreators/search';
import Container from './container';

const mapStateToProps = (state) => {
    return {
        keywords: state.search.keywords,
    }
};

const mapDispatchToProps = dispatch => bindActionCreators(searchActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Container); //안쓰는거 null 처리