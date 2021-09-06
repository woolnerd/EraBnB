class AddColUserId < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :host_id, :integer
    add_index :listings, :host_id
  end
end
