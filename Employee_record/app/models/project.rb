class Project < ActiveRecord::Base
  has_many :developers, dependent: :destroy
  has_many :clients
  has_many :companies, :through => :clients
  validates :title ,:description, presence: true
  
end
