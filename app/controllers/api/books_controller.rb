module Api
  module V1
    class BooksController < ApplicationController

      def index
        @hikes = Hike.all
        respond_to do |format|
            format.json { render :json => @hikes }
        end
      end
    end
  end
end
