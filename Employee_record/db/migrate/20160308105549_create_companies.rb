class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :company_name, null: false
      t.string :owner_name , null: false
      t.integer :year_of_registration , null: false

      t.timestamps null: false
    end
  end
end
