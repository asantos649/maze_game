class MazesController < ApplicationController
    def show
        maze = Maze.find(params[:id])
        render json: maze
    end

    def index
        mazes = Mazes.all
        render json: mazes
    end

    def destroy
        maze = Maze.find(params[:id])
        maze.destroy

        render json: {message: "Successfully deleted"}
    end
end
