class CreateCompanyAndProjects < ActiveRecord::Migration
  def change
    create_table :company_and_projects do |t|
      t.integer :company_id
      t.integer :project_id
      t.timestamps null: false
    end
  end
end
