class AddColumnOf < ActiveRecord::Migration
  def change
    add_column :projects, :no_of_developer , :integer
  end
end
