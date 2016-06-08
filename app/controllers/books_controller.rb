class BooksController < ApplicationController
    respond_to :json

    def index
      @books = Book.all
      respond_with(@books.to_json(:include => [:votes]))
    end

    def show
      respond_with(Book.find(params[:id]).to_json(:include => [:genre, :author, :votes]))
    end

    def create
      @book = Book.new(book_params)
      @book.genre = Genre.find_or_create_by(name: params[:genre])
      @book.author = Author.find_or_create_by(name: params[:author])
      if @book.save
        respond_to do |format|
          format.json { render :json => @book.to_json(:include => [:genre, :author]) }
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
        params.require(:book).permit(:title, :author, :genre)
      end


end
