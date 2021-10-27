export const selectAllFeeds = (state) =>{
    return Object.values(state.entities.feeds);
};

