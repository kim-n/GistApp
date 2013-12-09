class GistsController < ApplicationController
  def index
    @gists = current_user.gists
    render json: @gists.as_json(user_id: current_user.id)
  end
end
