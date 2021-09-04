class ChangeColumnSession < ActiveRecord::Migration[6.1]
  def change
    add_index :users, :session_token, unique: true
  end
end
