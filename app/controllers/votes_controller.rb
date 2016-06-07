class VotesController < ApplicationController

  def create
    @vote = Vote.find_or_create_by(vote_params.merge(user_id: current_user.id))
    respond_to do |format|
      format.json { render :json => @vote }
    end
    # @vote = Vote.new(vote_params.merge(user_id: current_user.id))
    # if @vote.save
    #   respond_to do |format|
    #     format.json { render :json => @vote }
    #   end
    # end
  end



  private
    def vote_params
      params.require(:vote).permit(:user_id, :book_id)
    end

    def as_json(options = {})
      super(options.merge(include: :user))
    end
end
