class Book < ActiveRecord::Base
  has_many :votes
end
