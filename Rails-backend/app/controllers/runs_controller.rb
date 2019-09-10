class RunsController < ApplicationController
    def show
        run = Run.find(params[:id])
        render json: run
    end

    def index
      runs = Run.all
      render json: runs
    end

    def create
        run = Run.new(run_params)

        if run.save
          render json: run
        else
          render json: {message: "Error", errors: run.errors.full_messages}, status: 406
        end
    end

    def delete
        run = Run.find(params[:id])
        run.destroy

        render json: {message: "Successfully deleted"}
    end

    private

    def run_params
      
    end
end
