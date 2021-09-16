class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :listing_id, null: false
      t.integer :author_id, null: false
      t.text :body, null: false
      t.float :integer, null: false

      t.timestamps
    end

    add_index :reviews, :listing_id
    add_index :reviews, :author_id
  end
end
