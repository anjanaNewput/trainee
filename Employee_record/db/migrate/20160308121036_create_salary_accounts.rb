class CreateSalaryAccounts < ActiveRecord::Migration
  def change
    create_table :salary_accounts do |t|
      t.integer :account_number, null: false
      t.string :bank_name, null: false
      t.integer :developer_id

      t.timestamps null: false
    end
  end
end
