class AddColumnAccountToDeveloper < ActiveRecord::Migration
  def change
    add_column :developers, :salary_account_id, :integer
  end
end
