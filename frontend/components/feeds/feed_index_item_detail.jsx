import React from "react";
import {Route} from "react-router-dom";

class FeedIndexItemDetail extends React.Component {
    // constructor(props) {
    //     super(props);

    //     console.log(this.props);
    // }

    componentDidMount() {
        this.props.requestSingleFeed(this.props.match.params.feedId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.feedId !== this.props.match.params.feedId) {
            this.props.requestSingleFeed(this.props.match.params.feedId);
        }
    }


    render() {
        const { feed } = this.props;
        if (!feed) return null;

        return (
            <div className="feed-index-item-detail">
                <h1>{feed.name}</h1>
                <h2>Layout: {feed.layout}</h2>
                <h2>Sort: {feed.sort}</h2>
                
            </div>
        );
    }
}

export default FeedIndexItemDetail;