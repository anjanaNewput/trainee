class AddColumnToDeveloper < ActiveRecord::Migration
  def change
    add_column :developers, :company_id, :integer
  end
end
