class AuthorsController < ApplicationController

  def index
    @authors = Author.all
    respond_with(@authors.to_json(:include => [:books]))
  end

  def show
    @author = Author.find(params[:id])
    respond_with(@author.to_json(:include => [:books]))
  end


end
