class CreateDeveloperApps < ActiveRecord::Migration
  def change
    create_table :developer_apps do |t|
      t.string :name
      t.string :email
      t.string :login

      t.timestamps null: false
    end
  end
end
