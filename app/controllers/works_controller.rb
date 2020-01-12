class WorksController < ApplicationController
  def index
    @works = Work.all
  end

  def create
  end
end
