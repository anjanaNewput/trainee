class CreateDevelopers < ActiveRecord::Migration
  def change
    create_table :developers do |t|

      t.string :employee_name , null: false
      t.integer :age , null: false
      t.string :email ,null: false
      t.string :role , null: false
      t.integer :project_id
      t.timestamps null: false
    end
  end
end
