class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string null: false
      t.integer :age 
      t.integer null: false
      t.string :role 
      t.string null: false

      t.timestamps null: false
    end
  end
end
