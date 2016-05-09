class BooksController < ApplicationController
    respond_to :json

    def index
      @books = Book.all
      respond_with(@books)
    end

    def show
      respond_with(Book.find(params[:id]))
    end

    def create
      @book = Book.new(book_params)
      if @book.save
        respond_to do |format|
          format.json { render :json => @book }
        end
      end
    end

    def update
      @book = Book.find(params[:id])
      if @book.update(book_params)
        respond_to do |format|
          format.json { render :json => @book }
        end
      end
    end

    def destroy
      respond_with Book.destroy(params[:id])
    end


    private
      def book_params
        params.require(:book).permit(:title, :author)
      end


end
