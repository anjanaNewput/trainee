class Employee2 < ActiveRecord::Base
  validates :name , presence: true 
  validates :age , presence: true 
  validates :role , presence: true 
end
