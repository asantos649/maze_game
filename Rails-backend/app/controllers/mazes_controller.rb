class MazesController < ApplicationController
    def show
        maze = Maze.find(params[:id])
        render json: maze
    end

    def index
        mazes = Maze.all
        render json: mazes
    end

end
