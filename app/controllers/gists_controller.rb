class GistsController < ApplicationController
  def index
    @gists = current_user.gists
    render json: @gists.as_json(user_id: current_user.id)
  end

  def create
    gist_files = params[:gist][:gist_files]
    params[:gist].delete("gist_files")
    @gist = current_user.gists.create(params[:gist])
    gist_files.each do |file|
      @gist.gist_files.create(file)
    end
    render json: @gist.as_json(user_id: current_user.id)
  end
end
