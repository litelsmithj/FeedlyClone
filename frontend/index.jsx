import React from "react";
import ReactDOM from "react-dom";
import * as APIUtil from "./util/api_util";
import configureStore from "./store/store";
import {receiveAllFeeds, requestAllFeeds} from "./actions/feed_actions";
import {selectAllFeeds} from "./reducers/selectors";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<h1><Root store = {store}/></h1>, root);

  // window.store = store;
});



// window.fetchAllFeeds = APIUtil.fetchAllFeeds;
// window.receiveAllFeeds = receiveAllFeeds;
// window.requestAllFeeds = requestAllFeeds;
// window.selectAllFeeds = selectAllFeeds;