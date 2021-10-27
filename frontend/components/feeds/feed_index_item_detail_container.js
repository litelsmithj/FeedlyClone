import {connect} from 'react-redux';
import {requestSingleFeed} from '../../actions/feed_actions';
import FeedIndexItemDetail from './feed_index_item_detail';

const mapStateToProps = (state, ownProps) => {
    return {
        feed: state.entities.feeds[ownProps.match.params.feedId],
        ui: state.ui
    };
};

const mapDispatchToProps = (dispatch) => ({
    requestSingleFeed: (feedId) => dispatch(requestSingleFeed(feedId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndexItemDetail);