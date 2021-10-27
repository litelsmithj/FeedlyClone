
class Api::FeedsController < ApplicationController
    def index
        @feeds = Feed.all
        render :index
    end

    def show
        @feed = Feed.find(params[:id])
        render :show
    end

    def create
        @feed = Feed.new(feed_params)
        if @feed.save
            render json: @feed
        else
            render json: @feed.errors
        end
    end

    def update
        @feed = Feed.find(params[:id])
        if @feed.update(feed_params)
            render json: @feed
        else
            render json: @feed.errors
        end
    end

    def destroy
        @feed = Feed.find(params[:id])
        @feed.destroy
        render json: @feed
    end

    private

    def feed_params
        params.require(:feed).permit(:title, :layout, :sort)
    end



end
