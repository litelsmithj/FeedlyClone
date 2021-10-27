class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
    end

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.create(user_params)

        if @user.save
            redirect_to user_url(@user)
        else
            flash.now[:errors] = @user.errors.full_messages
            redirect_to users_url
        end
    end



    private

    def user_params
        params.require(:user).permit(:email, :username, :password)
    end

end