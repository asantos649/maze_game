class MazesController < ApplicationController
    def show
        maze = Maze.find(params[:id])
        render json: maze
    end

    def index
        mazes = Mazes.all
        render json: mazes
    end

end
