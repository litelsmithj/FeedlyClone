import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_FEEDS = 'RECEIVE_ALL_FEEDS';
export const RECEIVE_SINGLE_FEED = 'RECEIVE_SINGLE_FEED';

export const receiveAllFeeds = (feeds) => ({
    type: RECEIVE_ALL_FEEDS,
    feeds
});

export const receiveSingleFeed = (payload) => ({
    type: RECEIVE_SINGLE_FEED,
    payload
});

export const requestAllFeeds = () => (dispatch) => {
    APIUtil.fetchAllFeeds().then(feeds => dispatch(receiveAllFeeds(feeds)));
};

export const requestSingleFeed = (id) => (dispatch) => {
    APIUtil.fetchSingleFeed(id).then(payload => dispatch(receiveSingleFeed(payload)));
};


