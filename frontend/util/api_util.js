
export const fetchAllFeeds = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/feeds'
    });
};

export const fetchSingleFeed = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/feeds/${id}`
    });
};
