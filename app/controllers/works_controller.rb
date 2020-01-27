class WorksController < ApplicationController
  def index
    @works = Work.all.slice(0, 60)
  end

  def show
    @work = Work.find(params[:id])
  end

  def create
  end
end
