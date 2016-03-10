class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :client_name, null: false
      t.integer :company_id
      t.integer :project_id
      t.timestamps null: false
    end
  end
end
