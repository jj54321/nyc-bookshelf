class VotesController < ApplicationController

  def create
    @vote = Vote.new(vote_params)
    if @vote.save
      respond_to do |format|
        format.json { render :json => @vote }
      end
    end
  end



  private
    def vote_params
      params.require(:vote).permit(:user_id, :book_id)
    end
end
