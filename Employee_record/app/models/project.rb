class Project < ActiveRecord::Base
  has_many :developers
  has_many :clients
  has_many :companies, :through => :clients
  validates :title ,:description, presence: true
end
