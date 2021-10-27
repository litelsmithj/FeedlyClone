import {Route} from 'react-router-dom';
import React from 'react';
import FeedIndexContainer from './feeds/feed_index_container';

const App = () => (
    <Route path="/" component={FeedIndexContainer}/>
);

export default App;