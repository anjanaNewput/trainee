class CompanyAndProject < ActiveRecord::Base
  belongs_to :company
  belongs_to :project
end
