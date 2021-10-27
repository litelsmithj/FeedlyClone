import React from "react";
import FeedIndexItem from "./feed_index_item";
import { Route } from "react-router-dom";
import FeedIndexItemDetailContainer from "./feed_index_item_detail_container";

class FeedIndex extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.props.requestAllFeeds();
    }

    render () {
        return (
            <div className = "nav-box">
                <h1 className = "feed-title">FEEDS</h1>
                <Route path = "/feeds/:feedId" component = {FeedIndexItemDetailContainer} />
                <ul className = "feeds-list">
                    {this.props.feeds.map((feed, index) => {
                        return (
                            <FeedIndexItem key={index} feed = {feed} />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default FeedIndex;