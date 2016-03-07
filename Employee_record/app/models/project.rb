class Project < ActiveRecord::Base
   has_many :developers
  validates :title ,:description, presence: true
end
