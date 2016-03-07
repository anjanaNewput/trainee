class Developer < ActiveRecord::Base
  belongs_to :project
  validates :employee_name , presence: true , format: { with: /[a-zA-Z]/,
             message: "should be letters"  }
  validates :age , presence: true , numericality: {integer_only: true , message: "should be in numbers"}
  validates :role , presence: true 
  validates :email , presence: true, format: { with: /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/,                    message: "must be like abc@gmail.com"}
end
