class Book < ActiveRecord::Base
  has_many :votes
  belongs_to :genre
  belongs_to :author
end
