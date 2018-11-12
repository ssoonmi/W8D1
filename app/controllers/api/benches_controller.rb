class Api::BenchesController < ApplicationController
  before_action :ensure_logged_in, only: [:create]

  def index
    if params[:bounds]
      @benches = Bench.in_bounds(params[:bounds])
    else
      @benches = Bench.all
    end
    render :index
  end

  def show
    @bench = Bench.find(params[:id])
    render :show
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :show
    else
      @errors = @bench.errors.full_messages
      render :errors
    end
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
