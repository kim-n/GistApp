class GistsController < ApplicationController
  def index
    @gists = current_user.gists
    render json: @gists.as_json(user_id: current_user.id)
  end

  def create
    @gist = current_user.gists.create(params[:gist])
    render json: @gist.as_json(user_id: current_user.id)
  end
end
