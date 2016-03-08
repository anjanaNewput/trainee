class Company < ActiveRecord::Base
  has_many :developers
  has_and_belongs_to_many :parts
end
