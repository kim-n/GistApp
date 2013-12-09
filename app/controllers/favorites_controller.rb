class FavoritesController < ApplicationController
  def index
    @favorites = current_user.favorites
    render json: @favorites
  end

  def create
    @favorite = current_user.favorites.create(
      gist_id: params[:gist_id]
    )

    render json: @favorite
  end

  def destroy
    @favorite = Favorite.find_by_user_id_and_gist_id(current_user.id, params[:gist_id])

    @favorite.destroy
    render json: nil
  end
end
