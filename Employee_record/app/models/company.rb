class Company < ActiveRecord::Base
  has_many :developers
  has_many :clients
  has_many :projects , :through => :clients
end
