class GenresController < ApplicationController

  def index
    @genres = Genre.all
    respond_with(@genres.to_json(:include => [:books]))
  end

  def show
    @genre = Genre.find(params[:id])
    respond_with(@genre.to_json(:include => [:books]))
  end


end
