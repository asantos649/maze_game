class UsersController < ApplicationController
    def show
        user = User.find(params[:id])
        render json: user
    end

    def create
        user = User.new(user_params)

        if user.save
          render json: user
        else
          render json: {message: "Error", errors: user.errors.full_messages}, status: 406
        end
    end

    def delete
        user = User.find(params[:id])
        user.destroy

        render json: {message: "Successfully deleted"}
    end

    private

    def user_params
      
    end
end
