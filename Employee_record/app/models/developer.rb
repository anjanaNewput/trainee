class Developer < ActiveRecord::Base
  belongs_to :project
  belongs_to :company
  has_one :salary_account
  validates :employee_name , presence: true , format: { with: /[a-zA-Z]/,
             message: "should be letters"  }
  validates :age , presence: true , numericality: {integer_only: true , message: "should be in numbers"}
  validates :role , presence: true 
  validates :email , presence: true, format: { with: /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/,                    message: "must be like abc@gmail.com"}
  before_validation :normalize_name, on: [:create, :update]
  
  after_initialize do |developer|
    puts "You have initialized an object!"
  end
  
 
  after_find do |developer|
    puts "You have found an object!"
  end
  
  after_destroy :destroy_action
  after_save :save_action
  
  protected
    def normalize_name
      self.employee_name = self.employee_name.titleize
      self.role = self.role.titleize
    end
  
    def destroy_action
      project.update_attribute('no_of_developer', (project.no_of_developer - 1))
    end
  
    def save_action
      project.update_attribute('no_of_developer', (project.no_of_developer + 1))
      
  end
  
end
