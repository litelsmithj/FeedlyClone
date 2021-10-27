import {connect} from 'react-redux';
import { selectAllFeeds } from '../../reducers/selectors';
import { requestAllFeeds } from '../../actions/feed_actions';
import FeedIndex from './feed_index';


const mapStateToProps = (state) => ({
    feeds: selectAllFeeds(state)
});

const mapDispatchToProps = (dispatch) => ({
    requestAllFeeds: () => dispatch(requestAllFeeds())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndex);