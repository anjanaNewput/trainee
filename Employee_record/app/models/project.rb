class Project < ActiveRecord::Base
  has_many :developers
  has_and_belongs_to_many :companies
  validates :title ,:description, presence: true
end
