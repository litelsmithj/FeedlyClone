import React from "react";
import FeedIndexItemDetail from "./feed_index_item_detail";
import { Link, NavLink } from "react-router-dom";

class FeedIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            detail: false
        };

    }


    render() {

        return (
            <div className="feed-index-item">
                <Link to={`/feeds/${this.props.feed.id}`}>
                    <div className="feed-index-item-title">
                        {this.props.feed.name}
                    </div>
                </Link>
            </div>
        );
    }
}

export default FeedIndexItem;