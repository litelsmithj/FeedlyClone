import { RECEIVE_ALL_FEEDS } from "../actions/feed_actions";
import { RECEIVE_SINGLE_FEED } from "../actions/feed_actions";

const feedsReducer = (state = {}, action) => {
    Object.freeze(state);
    let next_state = Object.assign({}, state);
    // console.log(next_state);
    switch (action.type) {
        case RECEIVE_ALL_FEEDS:
            return Object.assign({}, action.feeds);
        case RECEIVE_SINGLE_FEED:
            next_state[action.payload.feeds.id] = action.payload.feeds;
            return next_state;
        default:
            return state;
    }
};

export default feedsReducer;