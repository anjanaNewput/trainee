class CreateEmployee2s < ActiveRecord::Migration
  def change
    create_table :employee2s do |t|
      t.string :name
      t.integer :age
      t.string :role

      t.timestamps null: false
    end
  end
end
